import Image from "next/image"
import { CommentProps } from "@/src/Types/CommentProps"
import { Comment } from "./Comment";


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
];

export const CommentsSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold text-center mb-12">Comentarios de Nuestros Clientes</h2>


        <div
          className="flex overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-6">

            {
              comments.map( comment => (
                <Comment 
                  key=  { comment.name }
                  name= { comment.name } 
                  text= { comment.text }
                  stars={ comment.stars }
                />
              ))
            }


            {/* <div className="flex flex-col gap-4 rounded-lg bg-card-dark p-6 min-w-[320px] sm:min-w-[380px]">
              <div className="flex items-center gap-4">
                <Image className="w-12 h-12 rounded-full" alt="Foto de Ana García"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJKzkxdazHJJVKjZ7StVAJ1BgG-AzToX7Zju7iksbPnRALTrPI6bpwynCfj1hC-0EN6kEVYiYmJLJ1N8bIiduMGe4gn3e3Q3Htln64w02dDyTQ6dCpLL60JscjB3FNTPmzZKCY7w6y2xkHfA14t9dKTmZkMKY2pwMxukjTJOWczk7hhVMjyd6q-cpMUFJShc346JgrNHUEgFD0-zXoRn6OzCVHeo_bLABsbI0ycwuOXhWH2BWefHRyUBeK8Bj8XUPCMP7Pzhwb6ebQ" />
                <div>
                  <h4 className="text-white font-bold">Ana García</h4>
                  <div className="flex text-primary">
                    <span className="material-symbols-outlined !text-base">star</span><span
                      className="material-symbols-outlined !text-base">star</span><span
                        className="material-symbols-outlined !text-base">star</span><span
                          className="material-symbols-outlined !text-base">star</span><span
                            className="material-symbols-outlined !text-base">star_half</span>
                  </div>
                </div>
              </div>
              <p className="text-text-muted-dark text-sm">"Muy buena atención al cliente. Respondieron todas mis dudas y
                me ayudaron con el financiamiento. Estoy feliz con mi nuevo SUV."</p>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  )
}
