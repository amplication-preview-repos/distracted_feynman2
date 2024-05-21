import { DonationUpdateManyWithoutDonorsInput } from "./DonationUpdateManyWithoutDonorsInput";

export type DonorUpdateInput = {
  bloodType?: "Option1" | null;
  donations?: DonationUpdateManyWithoutDonorsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
