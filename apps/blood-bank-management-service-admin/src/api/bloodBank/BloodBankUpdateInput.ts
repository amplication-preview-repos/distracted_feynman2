import { InputJsonValue } from "../../types";

export type BloodBankUpdateInput = {
  address?: string | null;
  bloodTypeStock?: InputJsonValue;
  contactNumber?: string | null;
  name?: string | null;
};
