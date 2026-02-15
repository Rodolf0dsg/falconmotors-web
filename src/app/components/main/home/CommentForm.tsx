'use client'
import { useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Loader } from "../../Query/Loader";
import { postComment } from "@/src/api/Comment";

type Inputs = {
  name: string;
  stars: number
  text: string;
}

interface Props {
  onSuccess?: () => void;
}

export const CommentForm = ({ onSuccess }: Props) => {  
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);

  const { register, 
          handleSubmit, 
          formState: { errors },
          setValue,
          clearErrors, 
          reset,
  } = useForm<Inputs>();

  const handleClick = (star: number) => {
    const newRating = rating === star ? 0 : star;
    setRating(newRating);

    setValue("stars", newRating, { shouldValidate: true });
    if (newRating > 0) clearErrors("stars");

  };

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      setLoading( true );
      const res = await postComment(data);

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.msg || "Error al enviar comentario");
        return;
      }

      const result = await res.json();
      toast.success("Comentario publicado con éxito");
      if ( onSuccess ) onSuccess()
      reset();
      setRating(0); 
    } catch (error) {
      console.error(error);
      toast.error("Error de conexión con el servidor");
    } finally {
      setLoading( false );
    }
  }

  return (
    <div className="mt-12 bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col items-center relative">
            <label className="text-black text-sm mb-1" htmlFor="rating">Tu valoración</label>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleClick(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="cursor-pointer transition-colors duration-200"
                >
                  {(hover || rating) >= star ? (
                    <GoStarFill className="!text-3xl text-yellow-400" />
                  ) : (
                    <GoStar className="!text-3xl text-gray-400" />
                  )}
                </span>
              ))}
            </div>
              <input
                type="hidden"
                {...register("stars", {
                  required: "Debes seleccionar al menos una estrella",
                  min: { value: 1, message: "Debes seleccionar al menos una estrella" },
                  max: { value: 5, message: "No se pueden mas de 5 estrellas" },
                })}
                value={rating}
              />

              {/* Mensaje de error */}
              {errors.stars && (
                <span className="form-error">{errors.stars.message}</span>
              )}



        </div>
        <div className="relative">
          <label className="text-text-muted-light text-sm font-medium mb-1 block" htmlFor="name">
            Nombre
          </label>
          <input
            className="w-full bg-white border-2 border-gray-300 rounded-md px-3 py-2 text-sm text-black form-input focus:outline-0"
            id="name"
            placeholder="Tu nombre"
            type="text"
            {...register('name', {
              required: 'Este campo es obligatorio',
              minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
              maxLength: { value: 15, message: "No puede superar los 15 caracteres" }
            })}
          />
          { errors.name && <span className="form-error">{errors.name.message}</span>}
        </div>
        <div className="relative">
          <label className="text-text-muted-light text-sm font-medium mb-1 block" htmlFor="comment">Comentario</label>
          <textarea
            className="w-full bg-white border-2 border-gray-300 rounded-md px-3 py-2 text-sm text-black form-input focus:outline-0"
            id="comment"
            placeholder="Escribe tu experiencia..."
            rows={3}
            {...register('text', {
              required: 'Este campo es obligatorio',
              minLength: { value: 1, message: "No puede estar vacio" },
              maxLength: { value: 150, message: "No puede superar los 150 caracteres" }
            })}
          >
          </textarea>
          {errors.text && <span className="form-error">{errors.text.message}</span>}
        </div>
        <button
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
          disabled={loading}
        >
          { 
            loading 
              ? <Loader size={ 24 } />
              : <span className="truncate">Enviar Comentario</span>
          }
          
        </button>
      </form>
    </div>
  )
}
