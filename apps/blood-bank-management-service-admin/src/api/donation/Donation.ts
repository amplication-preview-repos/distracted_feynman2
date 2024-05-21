import { BloodRequest } from "../bloodRequest/BloodRequest";
import { Donor } from "../donor/Donor";

export type Donation = {
  bloodRequest?: BloodRequest | null;
  createdAt: Date;
  donationDate: Date | null;
  donor?: Donor | null;
  id: string;
  updatedAt: Date;
};
