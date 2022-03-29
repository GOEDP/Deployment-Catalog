import { DeploymentCatalogWhereInput } from "./DeploymentCatalogWhereInput";
import { DeploymentCatalogOrderByInput } from "./DeploymentCatalogOrderByInput";

export type DeploymentCatalogFindManyArgs = {
  where?: DeploymentCatalogWhereInput;
  orderBy?: Array<DeploymentCatalogOrderByInput>;
  skip?: number;
  take?: number;
};
