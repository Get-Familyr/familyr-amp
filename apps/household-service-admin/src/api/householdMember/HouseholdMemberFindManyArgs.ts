import { HouseholdMemberWhereInput } from "./HouseholdMemberWhereInput";
import { HouseholdMemberOrderByInput } from "./HouseholdMemberOrderByInput";

export type HouseholdMemberFindManyArgs = {
  where?: HouseholdMemberWhereInput;
  orderBy?: Array<HouseholdMemberOrderByInput>;
  skip?: number;
  take?: number;
};
