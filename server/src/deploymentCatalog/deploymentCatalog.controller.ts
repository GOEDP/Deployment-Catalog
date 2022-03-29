import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeploymentCatalogService } from "./deploymentCatalog.service";
import { DeploymentCatalogControllerBase } from "./base/deploymentCatalog.controller.base";

@swagger.ApiTags("deploymentCatalogs")
@common.Controller("deploymentCatalogs")
export class DeploymentCatalogController extends DeploymentCatalogControllerBase {
  constructor(
    protected readonly service: DeploymentCatalogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
