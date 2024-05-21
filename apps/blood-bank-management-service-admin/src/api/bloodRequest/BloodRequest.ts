import { Donation } from "../donation/Donation";

export type BloodRequest = {
  bloodType?: "Option1" | null;
  createdAt: Date;
  donations?: Array<Donation>;
  id: string;
  patientName: string | null;
  quantity: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
