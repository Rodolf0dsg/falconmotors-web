import type { CommentProps } from "@/src/Types/CommentProps";
import Image from "next/image";

const FilledStar = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={16} 
    height={16}
  >
    <path d="M12 2l3.09 6.32 6.91.99-5 4.87 1.18 6.88L12 18.02l-6.18 3.25L7 14.18l-5-4.87 6.91-.99L12 2z"/>
  </svg>
);

const OutlinedStar = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    width={16} height={16}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.32 6.91.99-5 4.87 1.18 6.88L12 18.02l-6.18 3.25L7 14.18l-5-4.87 6.91-.99L12 2z"/>
  </svg>
);

// const OutlinedStar = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={16} height={16}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.11a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.18.588l1.26 5.291c.15.63.542.493.085.121L12 18.156l-4.634 2.805c-.457.372-1.04-.153-.89-.78l1.26-5.292a.563.563 0 0 0-.18-.587l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.11Z" />
//         prueba
//     </svg>
// );

export const Comment = ({name, text, stars}: CommentProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-card-dark p-6 min-w-[320px] sm:min-w-[380px]">
      <div className="flex items-center gap-4">
        <Image 
          className="w-12 h-12 rounded-full" 
          alt={`Foto de ${ name }`}
          width={ 12 }
          height={ 12 }
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2QNZlQEBB1tLOya7BWHCBai52Mcv5m79adYXj3p8iWpKuwmliZT4y31Nq0d5ssYs3aca51a6jdKfK-oxjmct2U0XRA1GTXTTpwBM_vbWFBqL3X4tcIJUhyRPVupbzOjSK0Qan-wCfk8-G1WFjTl1UQHag5yhfbCb1FvmqcrOZCBERTElyiaLTZQf4rU-qOimUGoQ6_olUa4arz_HlYeF1eOFydnmdv53PcCSaZ65T68chyIYuW7FSiGZH5fLyE5AWeCZqWf95NJ8x" 
        />

        <div>
          <h4 className="text-white font-bold">{ name }</h4>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{
                      color: i < stars ? '#fbbf24' : '#6b7280' 
                  }}
                >
                    {i < stars 
                        ? <FilledStar/> 
                        : <OutlinedStar/>
                    }
                </div>
            ))}
          </div>
        </div>

      </div>
      <p className="text-text-muted-dark text-sm">"{ text }"</p>
    </div>
  )
}
