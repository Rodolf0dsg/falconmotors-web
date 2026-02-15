'use client'
import { parseLocalDate, startOfDay } from "@/src/helpers/dates";
import dynamic from "next/dynamic";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ColorSelector } from '../vehicles/ColorSelector';
const Select = dynamic(() => import("react-select"), { ssr: false });

interface ServiceOption {
  value: string;
  label: string;
}

interface Inputs {
  name:     string;
  service:  ServiceOption;
  date:     string;
  time:     string;
  message?: string;
}

const serviceOptions = [
  { value: "Mantenimiento General", label: "Mantenimiento General" },
  { value: "Revisión Completa", label: "Revisión Completa" },
  { value: "Latonería y Pintura", label: "Latonería y Pintura" },
  { value: "Otro", label: "Otro" },
];

export const ServicesForm = () => {

  const phone = process.env.NEXT_PUBLIC_SERVICES_WHATSAPP;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues
  } = useForm<Inputs>();

  const buildMessage = (data: Inputs) => {

    const fecha = new Date(data.date);
    const options: Intl.DateTimeFormatOptions = { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" };
    const fechaFormateada = fecha.toLocaleDateString("es-VE", options);

    const service = typeof data.service === "object" ? data.service.label : data.service;

    return `Saludos, mi nombre es ${data.name} y me gustaría agendar una cita para el ${fechaFormateada} a las ${data.time}. Motivo: ${service}. ${data.message ?? ''} `;
  };


  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const message = buildMessage(data);
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  }

  return (
    <section className="p-4 bg-gray-100">
      <div className="flex flex-wrap justify-center text-center gap-3 p-4">
        <div className="flex w-full flex-col gap-3">
          <p className="text-black text-4xl font-black leading-tight tracking-[-0.033em]">Agenda tu Cita</p>
          <p className="text-text-muted-light text-base font-normal leading-normal">Completa el formulario para contactarte con
            uno de nuestros asesores
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2 max-w-xl mx-auto flex flex-col gap-6 bg-white rounded-lg p-4 border border-gray-300 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block text-sm font-medium text-text-muted-light mb-2" htmlFor="nombre">Nombre</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg h-12 px-4 text-black placeholder-gray-500 transition-colors form-input focus:outline-0"
              id="nombre" 
              type="text"
              placeholder="Ingrese su nombre..."
              {...register("name", {
                required: "El nombre es obligatorio",
                setValueAs: (v) => v.trim()
              })}
            />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-text-muted-light mb-2" htmlFor="tipo_servicio">Tipo de
              Servicio
            </label>

            <Controller
              name="service"
              control={control}
              rules={{ required: "Selecciona un servicio" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={serviceOptions}
                  placeholder="Selecciona un servicio..."
                  className="bg-white border border-gray-300 text-black rounded-lg form-input focus:outline-0"
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "white",
                      height: "calc(var(--spacing) * 12)"
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "black",
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: "#ffffff",
                      color: "black",
                    }),
                  }}
                />
              )}
            />

            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative cursor-pointer">
            <label className="block text-sm font-medium text-text-muted-light mb-2" htmlFor="fecha">Fecha Preferida</label>
            <input
              className="cursor-pointer w-full bg-white border border-gray-300 rounded-lg h-12 px-4 text-black placeholder-white/40 transition-colors form-input focus:outline-0"
              onClick={() => (document.getElementById("fecha") as HTMLInputElement )?.showPicker()}
              id="fecha"  
              type="date"
              {...register('date', {
                required: "La fecha es obligatoria",
                validate: (v: string) => {
                  if (!v) return "La fecha es obligatoria";

                  const selected = parseLocalDate(v);   
                  const today = startOfDay(new Date()); 

                  const day = selected.getDay(); 

                  if (startOfDay(selected) < today) return "La fecha debe ser hoy o futura";

                  if (day === 0 || day === 6) {
                    return "No se pueden agendar citas en fin de semana";
                  }

                  const time = getValues("time");
                  if (!time) return "Selecciona una hora para hoy";

                  const [h, m] = time.split(":").map(Number);
                  const selectedDateTime = parseLocalDate(v);
                  selectedDateTime.setHours(h, m, 0, 0);

                  const now = new Date();
                  return selectedDateTime > now || "La hora debe ser futura";
                },

              })}
            />
            {errors.date && <span className="form-error">{errors.date.message}</span>}
          </div>
          <div className="relative cursor-pointer">
            <label className="block text-sm font-medium text-text-muted-light mb-2" htmlFor="hora">Hora</label>
            <input
              className="cursor-pointer w-full bg-white border border-gray-300 rounded-lg h-12 px-4 text-black transition-colors form-input focus:outline-0"
              onClick={() => (document.getElementById("hora") as HTMLInputElement )?.showPicker()}
              id="hora"
              type="time"
              {...register('time', {
                required: "La hora es obligatoria",
                validate: (v) => {
                  const [h] = v.split(":").map(Number);
                  return h >= 8 && h <= 18 || "La hora debe estar entre 8am y 6pm";
                }
              })}
            />
            {errors.time && <span className="form-error">{errors.time.message}</span>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted-light mb-2" htmlFor="mensaje">Mensaje Adicional
            (Opcional)</label>
          <textarea
            className="w-full bg-white border border-gray-300 rounded-lg p-4 text-black transition-colors form-input focus:outline-0"
            id="mensaje" 
            rows={4}
            placeholder="Escriba su mensaje..."
            {...register('message', {
              setValueAs: (v) => v.trim()
            })}
          />
        </div>
        <button

          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40"
          type="submit">
          <span className="truncate">Agendar cita</span>
        </button>
      </form>
    </section>
  )
}
