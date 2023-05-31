import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HouseholdMemberListRelationFilter } from "../householdMember/HouseholdMemberListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  avatar?: StringNullableFilter;
  bio?: StringNullableFilter;
  firstName?: StringNullableFilter;
  householdMembers?: HouseholdMemberListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
