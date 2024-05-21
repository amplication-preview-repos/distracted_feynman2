import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DonationTitle } from "../donation/DonationTitle";

export const DonorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="bloodType"
          label="BloodType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="donations"
          reference="Donation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DonationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
