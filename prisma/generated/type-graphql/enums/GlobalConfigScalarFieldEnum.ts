import * as TypeGraphQL from "type-graphql";

export enum GlobalConfigScalarFieldEnum {
  objectId = "objectId",
  params = "params",
  masterKeyOnly = "masterKeyOnly"
}
TypeGraphQL.registerEnumType(GlobalConfigScalarFieldEnum, {
  name: "GlobalConfigScalarFieldEnum",
  description: undefined,
});
