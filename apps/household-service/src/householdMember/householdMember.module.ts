import { Module } from "@nestjs/common";
import { HouseholdMemberModuleBase } from "./base/householdMember.module.base";
import { HouseholdMemberService } from "./householdMember.service";
import { HouseholdMemberController } from "./householdMember.controller";
import { HouseholdMemberResolver } from "./householdMember.resolver";

@Module({
  imports: [HouseholdMemberModuleBase],
  controllers: [HouseholdMemberController],
  providers: [HouseholdMemberService, HouseholdMemberResolver],
  exports: [HouseholdMemberService],
})
export class HouseholdMemberModule {}
