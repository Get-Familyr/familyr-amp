import { HouseholdMember } from "../householdMember/HouseholdMember";
import { JsonValue } from "type-fest";

export type User = {
  avatar: string | null;
  bio: string | null;
  createdAt: Date;
  firstName: string | null;
  householdMembers?: Array<HouseholdMember>;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
