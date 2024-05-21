import { DonationUpdateManyWithoutBloodRequestsInput } from "./DonationUpdateManyWithoutBloodRequestsInput";

export type BloodRequestUpdateInput = {
  bloodType?: "Option1" | null;
  donations?: DonationUpdateManyWithoutBloodRequestsInput;
  patientName?: string | null;
  quantity?: number | null;
  status?: "Option1" | null;
};
