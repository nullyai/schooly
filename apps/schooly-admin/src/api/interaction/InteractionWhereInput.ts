import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InteractionWhereInput = {
  author?: StringNullableFilter;
  comments?: JsonFilter;
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
};
