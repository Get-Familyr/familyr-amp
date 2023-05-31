import { HouseholdMember } from "../householdMember/HouseholdMember";

export type Household = {
  createdAt: Date;
  householdMembers?: Array<HouseholdMember>;
  id: string;
  name: string;
  updatedAt: Date;
};
