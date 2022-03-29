import { DeploymentCatalog as TDeploymentCatalog } from "../api/deploymentCatalog/DeploymentCatalog";

export const DEPLOYMENTCATALOG_TITLE_FIELD = "artifactId";

export const DeploymentCatalogTitle = (record: TDeploymentCatalog): string => {
  return record.artifactId || record.id;
};
