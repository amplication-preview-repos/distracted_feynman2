import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BloodBankEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <div />
        <TextInput label="ContactNumber" source="contactNumber" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
