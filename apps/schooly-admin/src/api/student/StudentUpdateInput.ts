import { AchievementUpdateManyWithoutStudentsInput } from "./AchievementUpdateManyWithoutStudentsInput";
import { InputJsonValue } from "../../types";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type StudentUpdateInput = {
  achievements?: AchievementUpdateManyWithoutStudentsInput;
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  friends?: string | null;
  lastName?: string | null;
  profilePicture?: InputJsonValue;
  teacher?: TeacherWhereUniqueInput | null;
};
