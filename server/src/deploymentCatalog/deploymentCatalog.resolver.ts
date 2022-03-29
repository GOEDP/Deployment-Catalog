import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DeploymentCatalogResolverBase } from "./base/deploymentCatalog.resolver.base";
import { DeploymentCatalog } from "./base/DeploymentCatalog";
import { DeploymentCatalogService } from "./deploymentCatalog.service";

@graphql.Resolver(() => DeploymentCatalog)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DeploymentCatalogResolver extends DeploymentCatalogResolverBase {
  constructor(
    protected readonly service: DeploymentCatalogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
