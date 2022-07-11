import * as TypeGraphQL from "type-graphql";

export enum ReportsOrderByRelevanceFieldEnum {
  customer = "customer",
  email = "email",
  products = "products",
  subtotal = "subtotal",
  applied_coupon = "applied_coupon",
  ip_address = "ip_address"
}
TypeGraphQL.registerEnumType(ReportsOrderByRelevanceFieldEnum, {
  name: "ReportsOrderByRelevanceFieldEnum",
  description: undefined,
});
