import { HouseholdMember as THouseholdMember } from "../api/householdMember/HouseholdMember";

export const HOUSEHOLDMEMBER_TITLE_FIELD = "id";

export const HouseholdMemberTitle = (record: THouseholdMember): string => {
  return record.id || String(record.id);
};
