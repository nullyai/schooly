import { Achievement } from "../achievement/Achievement";
import { JsonValue } from "type-fest";
import { Teacher } from "../teacher/Teacher";

export type Student = {
  achievements?: Array<Achievement>;
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  friends: string | null;
  id: string;
  lastName: string | null;
  profilePicture: JsonValue;
  teacher?: Teacher | null;
  updatedAt: Date;
};
