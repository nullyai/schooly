import { InputJsonValue } from "../../types";
import { StudentCreateNestedManyWithoutTeachersInput } from "./StudentCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  profilePicture?: InputJsonValue;
  students?: StudentCreateNestedManyWithoutTeachersInput;
};
