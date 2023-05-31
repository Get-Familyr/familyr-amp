import { SortOrder } from "../../util/SortOrder";

export type HouseholdMemberOrderByInput = {
  createdAt?: SortOrder;
  householdId?: SortOrder;
  householdRole?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
