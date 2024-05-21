import { DonationCreateNestedManyWithoutBloodRequestsInput } from "./DonationCreateNestedManyWithoutBloodRequestsInput";

export type BloodRequestCreateInput = {
  bloodType?: "Option1" | null;
  donations?: DonationCreateNestedManyWithoutBloodRequestsInput;
  patientName?: string | null;
  quantity?: number | null;
  status?: "Option1" | null;
};
