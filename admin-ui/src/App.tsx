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
import { DeploymentCatalogList } from "./deploymentCatalog/DeploymentCatalogList";
import { DeploymentCatalogCreate } from "./deploymentCatalog/DeploymentCatalogCreate";
import { DeploymentCatalogEdit } from "./deploymentCatalog/DeploymentCatalogEdit";
import { DeploymentCatalogShow } from "./deploymentCatalog/DeploymentCatalogShow";
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
        title={"DeploymentCatalog"}
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
          name="DeploymentCatalog"
          list={DeploymentCatalogList}
          edit={DeploymentCatalogEdit}
          create={DeploymentCatalogCreate}
          show={DeploymentCatalogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
