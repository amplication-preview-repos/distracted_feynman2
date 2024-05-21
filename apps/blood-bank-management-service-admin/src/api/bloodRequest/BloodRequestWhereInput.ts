import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BloodRequestWhereInput = {
  bloodType?: "Option1";
  donations?: DonationListRelationFilter;
  id?: StringFilter;
  patientName?: StringNullableFilter;
  quantity?: IntNullableFilter;
  status?: "Option1";
};
