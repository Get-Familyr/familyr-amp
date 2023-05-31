import { Household } from "../household/Household";
import { User } from "../user/User";

export type HouseholdMember = {
  createdAt: Date;
  household?: Household;
  householdRole?: Array<"Member" | "Head" | "Child" | "Guest">;
  id: string;
  updatedAt: Date;
  user?: User;
};
