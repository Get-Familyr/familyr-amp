import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";
import { HouseholdTitle } from "../household/HouseholdTitle";
import { UserTitle } from "../user/UserTitle";

export const HouseholdMemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="household.id"
          reference="Household"
          label="Household"
        >
          <SelectInput optionText={HouseholdTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="Household Role"
          source="householdRole"
          choices={[
            { label: "Member", value: "Member" },
            { label: "Head", value: "Head" },
            { label: "Child", value: "Child" },
            { label: "Guest", value: "Guest" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
