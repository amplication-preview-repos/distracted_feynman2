import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BLOODREQUEST_TITLE_FIELD } from "../bloodRequest/BloodRequestTitle";
import { DONOR_TITLE_FIELD } from "../donor/DonorTitle";

export const DonationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Donations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
