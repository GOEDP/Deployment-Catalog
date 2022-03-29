export type DeploymentCatalog = {
  appVersion: number;
  artifactId: string;
  configVersion: number | null;
  createdAt: Date;
  dbVersion: number | null;
  environment: string | null;
  groupId: string | null;
  host: string | null;
  id: string;
  updatedAt: Date;
  vaultVersion: number | null;
};
