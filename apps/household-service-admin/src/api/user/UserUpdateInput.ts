import { HouseholdMemberUpdateManyWithoutUsersInput } from "./HouseholdMemberUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  avatar?: string | null;
  bio?: string | null;
  firstName?: string | null;
  householdMembers?: HouseholdMemberUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
