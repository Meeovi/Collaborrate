import * as TypeGraphQL from "type-graphql";

export enum StocksScalarFieldEnum {
  id = "id",
  name = "name",
  enabled = "enabled",
  description = "description",
  website = "website",
  sources = "sources"
}
TypeGraphQL.registerEnumType(StocksScalarFieldEnum, {
  name: "StocksScalarFieldEnum",
  description: undefined,
});
