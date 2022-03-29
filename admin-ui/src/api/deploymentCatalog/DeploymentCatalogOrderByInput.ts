import { SortOrder } from "../../util/SortOrder";

export type DeploymentCatalogOrderByInput = {
  appVersion?: SortOrder;
  artifactId?: SortOrder;
  configVersion?: SortOrder;
  createdAt?: SortOrder;
  dbVersion?: SortOrder;
  environment?: SortOrder;
  groupId?: SortOrder;
  host?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  vaultVersion?: SortOrder;
};
