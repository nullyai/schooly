import { AchievementCreateNestedManyWithoutStudentsInput } from "./AchievementCreateNestedManyWithoutStudentsInput";
import { InputJsonValue } from "../../types";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type StudentCreateInput = {
  achievements?: AchievementCreateNestedManyWithoutStudentsInput;
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  friends?: string | null;
  lastName?: string | null;
  profilePicture?: InputJsonValue;
  teacher?: TeacherWhereUniqueInput | null;
};
