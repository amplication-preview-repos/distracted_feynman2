import { JsonValue } from "type-fest";

export type BloodBank = {
  address: string | null;
  bloodTypeStock: JsonValue;
  contactNumber: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
