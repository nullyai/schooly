import { SortOrder } from "../../util/SortOrder";

export type InteractionOrderByInput = {
  author?: SortOrder;
  comments?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  updatedAt?: SortOrder;
};
