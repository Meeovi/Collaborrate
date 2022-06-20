import * as TypeGraphQL from "type-graphql";

export enum Newsletter_subscribersOrderByRelevanceFieldEnum {
  email = "email",
  customer_first_name = "customer_first_name",
  customer_last_name = "customer_last_name",
  store = "store",
  status = "status",
  websites = "websites"
}
TypeGraphQL.registerEnumType(Newsletter_subscribersOrderByRelevanceFieldEnum, {
  name: "Newsletter_subscribersOrderByRelevanceFieldEnum",
  description: undefined,
});
