import { DonorWhereInput } from "./DonorWhereInput";
import { DonorOrderByInput } from "./DonorOrderByInput";

export type DonorFindManyArgs = {
  where?: DonorWhereInput;
  orderBy?: Array<DonorOrderByInput>;
  skip?: number;
  take?: number;
};
