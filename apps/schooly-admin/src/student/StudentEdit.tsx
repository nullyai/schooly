import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AchievementTitle } from "../achievement/AchievementTitle";
import { TeacherTitle } from "../teacher/TeacherTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="achievements"
          reference="Achievement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AchievementTitle} />
        </ReferenceArrayInput>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="friends" source="friends" />
        <TextInput label="lastName" source="lastName" />
        <div />
        <ReferenceInput source="teacher.id" reference="Teacher" label="Teacher">
          <SelectInput optionText={TeacherTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
