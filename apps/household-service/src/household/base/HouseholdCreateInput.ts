/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HouseholdMemberCreateNestedManyWithoutHouseholdsInput } from "./HouseholdMemberCreateNestedManyWithoutHouseholdsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HouseholdCreateInput {
  @ApiProperty({
    required: false,
    type: () => HouseholdMemberCreateNestedManyWithoutHouseholdsInput,
  })
  @ValidateNested()
  @Type(() => HouseholdMemberCreateNestedManyWithoutHouseholdsInput)
  @IsOptional()
  @Field(() => HouseholdMemberCreateNestedManyWithoutHouseholdsInput, {
    nullable: true,
  })
  householdMembers?: HouseholdMemberCreateNestedManyWithoutHouseholdsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;
}

export { HouseholdCreateInput as HouseholdCreateInput };
