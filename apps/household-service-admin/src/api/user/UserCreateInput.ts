import { HouseholdMemberCreateNestedManyWithoutUsersInput } from "./HouseholdMemberCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  avatar?: string | null;
  bio?: string | null;
  firstName?: string | null;
  householdMembers?: HouseholdMemberCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
