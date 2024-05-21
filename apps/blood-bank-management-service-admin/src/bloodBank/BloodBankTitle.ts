import { BloodBank as TBloodBank } from "../api/bloodBank/BloodBank";

export const BLOODBANK_TITLE_FIELD = "name";

export const BloodBankTitle = (record: TBloodBank): string => {
  return record.name?.toString() || String(record.id);
};
