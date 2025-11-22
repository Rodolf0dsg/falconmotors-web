export interface CommentProps {
  name:    string;
  text: string;
  stars:   0 | 1 | 2 | 3 | 4 | 5;
  photoUrl?: string
}