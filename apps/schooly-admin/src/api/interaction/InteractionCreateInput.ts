import { InputJsonValue } from "../../types";

export type InteractionCreateInput = {
  author?: string | null;
  comments?: InputJsonValue;
  content?: string | null;
  date?: Date | null;
  likes?: number | null;
};
