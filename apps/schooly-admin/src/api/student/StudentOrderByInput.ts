import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  friends?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  profilePicture?: SortOrder;
  teacherId?: SortOrder;
  updatedAt?: SortOrder;
};
