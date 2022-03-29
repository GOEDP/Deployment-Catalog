import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DeploymentCatalogCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="AppVersion" source="appVersion" />
        <TextInput label="ArtifactID" source="artifactId" />
        <NumberInput label="ConfigVersion" source="configVersion" />
        <NumberInput label="DBVersion" source="dbVersion" />
        <TextInput label="Environment" source="environment" />
        <TextInput label="GroupID" source="groupId" />
        <TextInput label="Host" source="host" />
        <NumberInput label="VaultVersion" source="vaultVersion" />
      </SimpleForm>
    </Create>
  );
};
