import * as TypeGraphQL from "type-graphql";

export enum ReportsScalarFieldEnum {
  id = "id",
  customer = "customer",
  email = "email",
  products = "products",
  quantity = "quantity",
  subtotal = "subtotal",
  applied_coupon = "applied_coupon",
  created = "created",
  updated = "updated",
  ip_address = "ip_address"
}
TypeGraphQL.registerEnumType(ReportsScalarFieldEnum, {
  name: "ReportsScalarFieldEnum",
  description: undefined,
});
