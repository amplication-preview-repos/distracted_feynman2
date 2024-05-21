import { Donor as TDonor } from "../api/donor/Donor";

export const DONOR_TITLE_FIELD = "name";

export const DonorTitle = (record: TDonor): string => {
  return record.name?.toString() || String(record.id);
};
