import { HouseholdMemberListRelationFilter } from "../householdMember/HouseholdMemberListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type HouseholdWhereInput = {
  householdMembers?: HouseholdMemberListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
