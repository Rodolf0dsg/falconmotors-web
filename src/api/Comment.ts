import { CommentResponse } from "../Types/CommentResponse";

export const getComments = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`);
  const { data }: CommentResponse = await res.json();
  return data;
}


interface PostComment {
  stars: number, 
  name:  string, 
  text:  string,
}

export const postComment = async(data: PostComment): Promise<Response> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res;
}