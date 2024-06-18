import { SortOrder } from "../../util/SortOrder";

export type AchievementOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
