import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DonorWhereInput = {
  bloodType?: "Option1";
  donations?: DonationListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
