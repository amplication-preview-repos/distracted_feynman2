import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLOODREQUEST_TITLE_FIELD } from "../bloodRequest/BloodRequestTitle";
import { DONOR_TITLE_FIELD } from "./DonorTitle";

export const DonorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BloodType" source="bloodType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Donation"
          target="donorId"
          label="Donations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BloodRequest"
              source="bloodrequest.id"
              reference="BloodRequest"
            >
              <TextField source={BLOODREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DonationDate" source="donationDate" />
            <ReferenceField label="Donor" source="donor.id" reference="Donor">
              <TextField source={DONOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
