import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { HouseholdMemberTitle } from "../householdMember/HouseholdMemberTitle";

export const HouseholdCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="householdMembers"
          reference="HouseholdMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HouseholdMemberTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
