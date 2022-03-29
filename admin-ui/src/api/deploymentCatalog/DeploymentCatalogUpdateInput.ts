export type DeploymentCatalogUpdateInput = {
  appVersion?: number;
  artifactId?: string;
  configVersion?: number | null;
  dbVersion?: number | null;
  environment?: string | null;
  groupId?: string | null;
  host?: string | null;
  vaultVersion?: number | null;
};
