import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HouseholdMemberServiceBase } from "./base/householdMember.service.base";

@Injectable()
export class HouseholdMemberService extends HouseholdMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
