import { InputJsonValue } from "../../types";

export type BloodBankCreateInput = {
  address?: string | null;
  bloodTypeStock?: InputJsonValue;
  contactNumber?: string | null;
  name?: string | null;
};
