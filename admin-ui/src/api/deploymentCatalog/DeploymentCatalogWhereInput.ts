import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeploymentCatalogWhereInput = {
  appVersion?: FloatFilter;
  artifactId?: StringFilter;
  configVersion?: FloatNullableFilter;
  dbVersion?: FloatNullableFilter;
  environment?: StringNullableFilter;
  groupId?: StringNullableFilter;
  host?: StringNullableFilter;
  id?: StringFilter;
  vaultVersion?: FloatNullableFilter;
};
