import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HouseholdMemberWhereInput = {
  household?: HouseholdWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
