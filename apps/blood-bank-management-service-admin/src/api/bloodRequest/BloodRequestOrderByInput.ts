import { SortOrder } from "../../util/SortOrder";

export type BloodRequestOrderByInput = {
  bloodType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  patientName?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
