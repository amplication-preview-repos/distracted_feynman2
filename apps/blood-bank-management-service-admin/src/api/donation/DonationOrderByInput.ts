import { SortOrder } from "../../util/SortOrder";

export type DonationOrderByInput = {
  bloodRequestId?: SortOrder;
  createdAt?: SortOrder;
  donationDate?: SortOrder;
  donorId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
