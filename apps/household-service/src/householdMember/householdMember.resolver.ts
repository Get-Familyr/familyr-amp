import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HouseholdMemberResolverBase } from "./base/householdMember.resolver.base";
import { HouseholdMember } from "./base/HouseholdMember";
import { HouseholdMemberService } from "./householdMember.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HouseholdMember)
export class HouseholdMemberResolver extends HouseholdMemberResolverBase {
  constructor(
    protected readonly service: HouseholdMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
