import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BloodBankCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <div />
        <TextInput label="ContactNumber" source="contactNumber" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
