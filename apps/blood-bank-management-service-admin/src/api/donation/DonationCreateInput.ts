import { BloodRequestWhereUniqueInput } from "../bloodRequest/BloodRequestWhereUniqueInput";
import { DonorWhereUniqueInput } from "../donor/DonorWhereUniqueInput";

export type DonationCreateInput = {
  bloodRequest?: BloodRequestWhereUniqueInput | null;
  donationDate?: Date | null;
  donor?: DonorWhereUniqueInput | null;
};
