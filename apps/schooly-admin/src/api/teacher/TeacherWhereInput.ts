import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type TeacherWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profilePicture?: JsonFilter;
  students?: StudentListRelationFilter;
};
