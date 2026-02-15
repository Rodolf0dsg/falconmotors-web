import type { CommentProps } from "@/src/Types/CommentProps";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

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

export const Comment = ({name, text, stars = 5, hidden, ...props}: CommentProps) => {
  return (
    <div 
      className={`flex flex-col gap-4 rounded-lg bg-card-light p-6 min-w-[320px] sm:min-w-[380px] min-h-[150px] ${hidden ? 'opacity-0' : null} shadow-lg border-gray-800`}
    >
      <div className="flex items-center gap-4">
        {/* <Image 
          className="w-12 h-12 rounded-full border-gray-800 border-2" 
          alt={`Foto de ${ name }`}
          width={ 12 }
          height={ 12 }
          src="/avatar.png" 
        /> */}
        <RxAvatar size={ 48 } className="text-gray-500"/>


        <div>
          <h4 className="text-black font-bold">{ name || '' }</h4>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{
                      color: i < stars ? '#fbbf24' : '#fbbf24',
                  }}
                >
                    {i < stars 
                        ? <FilledStar /> 
                        : <OutlinedStar/>
                    }
                </div>
            ))}
          </div>
        </div>

      </div>
      <p className="text-black text-sm">"{ text || '' }"</p>
    </div>
  )
}
