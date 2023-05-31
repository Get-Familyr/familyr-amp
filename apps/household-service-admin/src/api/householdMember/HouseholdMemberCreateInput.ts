import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HouseholdMemberCreateInput = {
  household: HouseholdWhereUniqueInput;
  householdRole?: Array<"Member" | "Head" | "Child" | "Guest">;
  user: UserWhereUniqueInput;
};
