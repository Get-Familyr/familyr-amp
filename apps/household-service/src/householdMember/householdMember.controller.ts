import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HouseholdMemberService } from "./householdMember.service";
import { HouseholdMemberControllerBase } from "./base/householdMember.controller.base";

@swagger.ApiTags("householdMembers")
@common.Controller("householdMembers")
export class HouseholdMemberController extends HouseholdMemberControllerBase {
  constructor(
    protected readonly service: HouseholdMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
