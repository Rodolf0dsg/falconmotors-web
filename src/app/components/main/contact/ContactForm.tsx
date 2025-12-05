'use client'
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Loader } from "../../Query/Loader";

const phoneRegex = /^\+?[0-9]{7,15}$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

type Inputs = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  motivo: ContactReason;
  mensaje: string;
}

enum ContactReason {
  VehiclePurchase = "Compra de Vehículo",
  TechnicalService = "Servicio técnico o mecánico",
  GeneralInquiry = "Consulta general"
}

export const ContactForm = () => {

  const params = useSearchParams();
  const [ isLoading, setIsLoading ] = useState(false);

  const reasonParam = params.get('reason');
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      motivo: (reasonParam === "vehiculo")
        ? ContactReason.VehiclePurchase
        : reasonParam === "servicio"
          ? ContactReason.TechnicalService
          : reasonParam === "consulta"
            ? ContactReason.GeneralInquiry
            : "" as ContactReason
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.nombre + " " + data.apellido,
          email: data.email,
          message: `
          Teléfono: ${data.telefono}
          Motivo: ${data.motivo}
          Mensaje: ${data.mensaje}
        `,
        }),
      });

      const result = await res.json();
      if (result.ok) {
        toast.success("Consulta enviada con éxito");
      } else {
        toast.info("Error al enviar la consulta");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error inesperado");
    }
    setIsLoading(false);
  };

  return (
    <div className="rounded-lg bg-white border border-gray-200 shadow-2xl p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" method="POST">


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="flex flex-col relative">
            <span className="text-base font-medium text-text-light pb-2">Nombre</span>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 bg-white border-2 border-gray-300 h-14 p-[15px] text-base font-normal leading-normal"
              placeholder="Ingresa tu nombre"
              type="text"
              {...register("nombre", {
                required: "Este campo es obligatorio",
                minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
                maxLength: { value: 15, message: "No puede superar los 15 caracteres" }
              })}
            />
            {errors.nombre && <span className="form-error">{errors.nombre.message}</span>}
          </label>


          <label className="flex flex-col relative">
            <span className="text-base font-medium text-text-light pb-2">Apellido</span>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 bg-white border-2 border-gray-300 h-14 p-[15px] text-base font-normal leading-normal"
              placeholder="Ingresa tu apellido"
              type="text"
              {...register("apellido", {
                minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
                maxLength: { value: 15, message: "No puede superar los 15 caracteres" }
              })}
            />
            {errors.apellido && <span className="form-error">{errors.apellido.message}</span>}
          </label>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="flex flex-col relative">
            <span className="text-base font-medium text-text-light pb-2">Email</span>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 bg-white border-2 border-gray-300 h-14 p-[15px] text-base font-normal leading-normal"
              placeholder="Ingresa tu email"
              type="email"
              {...register("email", {
                required: "Este campo es obligatorio",
                minLength: { value: 5, message: "Debe tener al menos 5 caracteres" },
                maxLength: { value: 50, message: "No puede superar los 50 caracteres" },
                pattern: {
                  value: emailRegex,
                  message: "Formato de email inválido",
                }
              })}
            />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </label>


          <label className="flex flex-col relative">
            <span className="text-base font-medium text-text-light pb-2">Teléfono</span>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 bg-white border-2 border-gray-300 h-14 p-[15px] text-base font-normal leading-normal"
              placeholder="Ingresa tu teléfono"
              type="tel"
              {...register("telefono", {
                required: "Este campo es obligatorio",
                minLength: { value: 7, message: "Debe tener al menos 7 caracteres" },
                maxLength: { value: 15, message: "No puede superar los 15 caracteres" },
                pattern: {
                  value: phoneRegex,
                  message: "Formato de teléfono inválido"
                }
              })}
            />
            {errors.telefono && <span className="form-error">{errors.telefono.message}</span>}
          </label>
        </div>


        <div>
          <label className="flex flex-col relative">
            <span className="text-base font-medium text-text-light pb-2">Motivo de contacto</span>
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 bg-white border-2 border-gray-300 h-14 p-[15px] text-base font-normal leading-normal"
              {...register("motivo", { required: "Este campo es obligatorio" })}
            >
              <option value=""                                >Selecciona un motivo...</option>
              <option value={ContactReason.VehiclePurchase} >Compra de Vehículo</option>
              <option value={ContactReason.TechnicalService}>Servicio técnico o mecánico</option>
              <option value={ContactReason.GeneralInquiry}  >Consulta general</option>
            </select>
            {errors.motivo && <span className="form-error">{errors.motivo.message}</span>}
          </label>
        </div>


        <div>
          <label className="flex flex-col">
            <span className="text-base font-medium text-text-light pb-2">Mensaje</span>
            <textarea
              className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg focus:outline-0 bg-white border-gray-300 border-2 min-h-36 p-[15px] text-base font-normal leading-normal"
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              {...register("mensaje", {
                maxLength: { value: 200, message: "No puede superar los 200 caracteres" }
              })}
            />
            {errors.mensaje && <span className="form-error">{errors.mensaje.message}</span>}
          </label>
        </div>


        <div>
          <button 
            className="btn-primary w-full text-white font-bold py-4 px-10 rounded-lg text-lg cursor-pointer"
            type="submit"
            disabled={ isLoading }
          >
            { isLoading ? <Loader size={ 24 }/> : 'Enviar consulta'}
          </button>
        </div>
      </form>
    </div>
  )
}
