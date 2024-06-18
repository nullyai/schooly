import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChallengeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="participants" source="participants" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
