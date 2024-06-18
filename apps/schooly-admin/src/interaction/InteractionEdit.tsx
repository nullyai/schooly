import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const InteractionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <div />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="likes" source="likes" />
      </SimpleForm>
    </Edit>
  );
};
