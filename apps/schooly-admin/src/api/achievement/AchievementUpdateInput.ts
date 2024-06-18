import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AchievementUpdateInput = {
  date?: Date | null;
  description?: string | null;
  student?: StudentWhereUniqueInput | null;
  title?: string | null;
};
