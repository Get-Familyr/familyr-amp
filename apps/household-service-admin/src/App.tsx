import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { HouseholdList } from "./household/HouseholdList";
import { HouseholdCreate } from "./household/HouseholdCreate";
import { HouseholdEdit } from "./household/HouseholdEdit";
import { HouseholdShow } from "./household/HouseholdShow";
import { HouseholdMemberList } from "./householdMember/HouseholdMemberList";
import { HouseholdMemberCreate } from "./householdMember/HouseholdMemberCreate";
import { HouseholdMemberEdit } from "./householdMember/HouseholdMemberEdit";
import { HouseholdMemberShow } from "./householdMember/HouseholdMemberShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Household Service"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Household"
          list={HouseholdList}
          edit={HouseholdEdit}
          create={HouseholdCreate}
          show={HouseholdShow}
        />
        <Resource
          name="HouseholdMember"
          list={HouseholdMemberList}
          edit={HouseholdMemberEdit}
          create={HouseholdMemberCreate}
          show={HouseholdMemberShow}
        />
      </Admin>
    </div>
  );
};

export default App;
