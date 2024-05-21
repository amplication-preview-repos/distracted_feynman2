import { DonationCreateNestedManyWithoutDonorsInput } from "./DonationCreateNestedManyWithoutDonorsInput";

export type DonorCreateInput = {
  bloodType?: "Option1" | null;
  donations?: DonationCreateNestedManyWithoutDonorsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
