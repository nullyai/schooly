import { Teacher as TTeacher } from "../api/teacher/Teacher";

export const TEACHER_TITLE_FIELD = "firstName";

export const TeacherTitle = (record: TTeacher): string => {
  return record.firstName?.toString() || String(record.id);
};
