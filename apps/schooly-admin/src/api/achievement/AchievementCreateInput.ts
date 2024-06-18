import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AchievementCreateInput = {
  date?: Date | null;
  description?: string | null;
  student?: StudentWhereUniqueInput | null;
  title?: string | null;
};
