import { HouseholdMemberCreateNestedManyWithoutHouseholdsInput } from "./HouseholdMemberCreateNestedManyWithoutHouseholdsInput";

export type HouseholdCreateInput = {
  householdMembers?: HouseholdMemberCreateNestedManyWithoutHouseholdsInput;
  name: string;
};
