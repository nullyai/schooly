import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChallengeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="participants" source="participants" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
