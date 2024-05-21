import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BLOODREQUEST_TITLE_FIELD } from "../bloodRequest/BloodRequestTitle";
import { DONOR_TITLE_FIELD } from "../donor/DonorTitle";

export const DonationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
