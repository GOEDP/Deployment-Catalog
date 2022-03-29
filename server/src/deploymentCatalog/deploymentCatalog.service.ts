import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DeploymentCatalogServiceBase } from "./base/deploymentCatalog.service.base";

@Injectable()
export class DeploymentCatalogService extends DeploymentCatalogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
