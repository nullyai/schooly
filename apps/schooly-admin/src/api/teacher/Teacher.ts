import { JsonValue } from "type-fest";
import { Student } from "../student/Student";

export type Teacher = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profilePicture: JsonValue;
  students?: Array<Student>;
  updatedAt: Date;
};
