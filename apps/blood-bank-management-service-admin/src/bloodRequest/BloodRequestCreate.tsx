import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DonationTitle } from "../donation/DonationTitle";

export const BloodRequestCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="PatientName" source="patientName" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
