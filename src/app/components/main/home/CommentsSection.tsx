'use client'
import { CommentProps } from "@/src/Types/CommentProps"
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "@/src/api/Comment";


const comments: CommentProps[] = [
  {
    name: 'Ana García',
    text: 'Muy buena atención al cliente. Respondieron todas mis dudas y me ayudaron con el financiamiento. Estoy feliz con mi nuevo SUV.',
    stars: 4
  },
  {
    name: 'Carlos Mendoza',
    text: 'El proceso fue increíblemente rápido y sencillo. Encontré el auto que quería a un precio justo. ¡Totalmente recomendados!',
    stars: 4
  },
  {
    name: 'Javier Rodríguez',
    text: 'Vendí mi auto con ellos y me ofrecieron un excelente precio. El servicio de consignación es muy eficiente y transparente.',
    stars: 5
  },
    {
    name: 'Ana García',
    text: 'Muy buena atención al cliente. Respondieron todas mis dudas y me ayudaron con el financiamiento. Estoy feliz con mi nuevo SUV.',
    stars: 4
  },
  {
    name: 'Carlos Mendoza',
    text: 'El proceso fue increíblemente rápido y sencillo. Encontré el auto que quería a un precio justo. ¡Totalmente recomendados!',
    stars: 4
  },
  {
    name: 'Javier Rodríguez',
    text: 'Vendí mi auto con ellos y me ofrecieron un excelente precio. El servicio de consignación es muy eficiente y transparente.',
    stars: 5
  },
];

export const CommentsSection = () => {

  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    staleTime: 2629800000
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showForm]);

  const handleCommentPosted = () => {
    queryClient.invalidateQueries({ queryKey: ["comments"] });  
  };

  return (
    <section className="pt-16 sm:pt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold text-center mb-12">Comentarios de Nuestros Clientes</h2>


        <div
          className={`flex ${ ((data?.length ?? 0) <= 2) ? 'justify-center' : null  } overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden`}
        >
          

            {
              (!data || data?.length === 0)
                ? 
                (
                  <div className="w-full text-center py-8">
                    <p className="text-gray-400 text-lg">
                      No hay comentarios todavía, sé el primero en comentar...
                    </p>
                  </div>
                )
                : 
                (
                  <div className={`flex items-stretch p-4 gap-6 ${data.length <= 2 ? "justify-center" : ""}`}>
                    {/* { data.length === 1 || data.length === 2 && <Comment hidden/> } */}
                    {data?.map(comment => (
                      <Comment
                        key={comment._id}
                        name={comment.name}
                        text={comment.text}
                        stars={comment.stars}
                        // className={data.length <= 2 ? "mx-auto" : ""}
                      />
                    ))}
                    {/* { data.length === 2 && <Comment hidden/> } */}
                  </div>
              )
            }

          

        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
            onClick={() => setShowForm(true)}
          >
            <span className="truncate">Dejar comentario</span>
          </button>
          {/* <button
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-card-border-dark text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-80 transition-opacity">
              <span className="truncate">Dejar comentario</span>
            </button> */}
        </div>
      </div>
      <Modal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      >
        <CommentForm onSuccess={handleCommentPosted} />
      </Modal>
    </section>
  )
}
