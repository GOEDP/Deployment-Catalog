import { Module } from "@nestjs/common";
import { DeploymentCatalogModuleBase } from "./base/deploymentCatalog.module.base";
import { DeploymentCatalogService } from "./deploymentCatalog.service";
import { DeploymentCatalogController } from "./deploymentCatalog.controller";
import { DeploymentCatalogResolver } from "./deploymentCatalog.resolver";

@Module({
  imports: [DeploymentCatalogModuleBase],
  controllers: [DeploymentCatalogController],
  providers: [DeploymentCatalogService, DeploymentCatalogResolver],
  exports: [DeploymentCatalogService],
})
export class DeploymentCatalogModule {}
