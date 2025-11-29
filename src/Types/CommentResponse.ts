export interface CommentResponse {
  data: Comment[];
}

export interface Comment {
  _id:       string;
  name:      string;
  stars:     0 | 1 | 2 | 3 | 4 | 5;
  text:      string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
}
