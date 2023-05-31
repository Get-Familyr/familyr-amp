import { HouseholdMemberUpdateManyWithoutHouseholdsInput } from "./HouseholdMemberUpdateManyWithoutHouseholdsInput";

export type HouseholdUpdateInput = {
  householdMembers?: HouseholdMemberUpdateManyWithoutHouseholdsInput;
  name?: string;
};
