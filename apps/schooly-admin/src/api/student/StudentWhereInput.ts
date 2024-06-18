import { AchievementListRelationFilter } from "../achievement/AchievementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type StudentWhereInput = {
  achievements?: AchievementListRelationFilter;
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  friends?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profilePicture?: JsonFilter;
  teacher?: TeacherWhereUniqueInput;
};
