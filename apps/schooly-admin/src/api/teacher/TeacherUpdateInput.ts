import { InputJsonValue } from "../../types";
import { StudentUpdateManyWithoutTeachersInput } from "./StudentUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  profilePicture?: InputJsonValue;
  students?: StudentUpdateManyWithoutTeachersInput;
};
