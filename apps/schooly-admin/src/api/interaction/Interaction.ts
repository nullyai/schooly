import { JsonValue } from "type-fest";

export type Interaction = {
  author: string | null;
  comments: JsonValue;
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  likes: number | null;
  updatedAt: Date;
};
