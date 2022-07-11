import * as TypeGraphQL from "type-graphql";

export enum ReturnsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  validity = "validity",
  return_prefix = "return_prefix",
  prod_id = "prod_id",
  cust_id = "cust_id"
}
TypeGraphQL.registerEnumType(ReturnsScalarFieldEnum, {
  name: "ReturnsScalarFieldEnum",
  description: undefined,
});
