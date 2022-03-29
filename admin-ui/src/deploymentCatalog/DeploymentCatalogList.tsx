import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeploymentCatalogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeploymentCatalogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AppVersion" source="appVersion" />
        <TextField label="ArtifactID" source="artifactId" />
        <TextField label="ConfigVersion" source="configVersion" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DBVersion" source="dbVersion" />
        <TextField label="Environment" source="environment" />
        <TextField label="GroupID" source="groupId" />
        <TextField label="Host" source="host" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VaultVersion" source="vaultVersion" />
      </Datagrid>
    </List>
  );
};
