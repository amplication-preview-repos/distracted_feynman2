import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { BloodRequestTitle } from "../bloodRequest/BloodRequestTitle";
import { DonorTitle } from "../donor/DonorTitle";

export const DonationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="bloodRequest.id"
          reference="BloodRequest"
          label="BloodRequest"
        >
          <SelectInput optionText={BloodRequestTitle} />
        </ReferenceInput>
        <DateTimeInput label="DonationDate" source="donationDate" />
        <ReferenceInput source="donor.id" reference="Donor" label="Donor">
          <SelectInput optionText={DonorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
