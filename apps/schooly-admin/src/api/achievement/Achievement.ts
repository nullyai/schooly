import { Student } from "../student/Student";

export type Achievement = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  student?: Student | null;
  title: string | null;
  updatedAt: Date;
};
