import { SortOrder } from "../../util/SortOrder";

export type DonorOrderByInput = {
  bloodType?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
