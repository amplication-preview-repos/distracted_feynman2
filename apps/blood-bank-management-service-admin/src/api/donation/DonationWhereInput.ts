import { BloodRequestWhereUniqueInput } from "../bloodRequest/BloodRequestWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DonorWhereUniqueInput } from "../donor/DonorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DonationWhereInput = {
  bloodRequest?: BloodRequestWhereUniqueInput;
  donationDate?: DateTimeNullableFilter;
  donor?: DonorWhereUniqueInput;
  id?: StringFilter;
};
