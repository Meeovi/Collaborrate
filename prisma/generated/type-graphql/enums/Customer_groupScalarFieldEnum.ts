import * as TypeGraphQL from "type-graphql";

export enum Customer_groupScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  tax_class = "tax_class",
  cust_id = "cust_id"
}
TypeGraphQL.registerEnumType(Customer_groupScalarFieldEnum, {
  name: "Customer_groupScalarFieldEnum",
  description: undefined,
});
