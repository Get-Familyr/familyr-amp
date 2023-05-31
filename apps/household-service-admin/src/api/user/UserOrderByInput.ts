import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  avatar?: SortOrder;
  bio?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
