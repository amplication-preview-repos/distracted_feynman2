import { BloodBankWhereInput } from "./BloodBankWhereInput";
import { BloodBankOrderByInput } from "./BloodBankOrderByInput";

export type BloodBankFindManyArgs = {
  where?: BloodBankWhereInput;
  orderBy?: Array<BloodBankOrderByInput>;
  skip?: number;
  take?: number;
};
