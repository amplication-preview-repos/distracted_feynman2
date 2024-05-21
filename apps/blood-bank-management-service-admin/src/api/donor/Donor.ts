import { Donation } from "../donation/Donation";

export type Donor = {
  bloodType?: "Option1" | null;
  createdAt: Date;
  donations?: Array<Donation>;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
