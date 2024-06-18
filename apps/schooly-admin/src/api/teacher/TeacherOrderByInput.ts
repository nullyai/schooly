import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  profilePicture?: SortOrder;
  updatedAt?: SortOrder;
};
