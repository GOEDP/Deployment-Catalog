import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DeploymentCatalogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
