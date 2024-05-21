import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type BloodBankWhereInput = {
  address?: StringNullableFilter;
  bloodTypeStock?: JsonFilter;
  contactNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
