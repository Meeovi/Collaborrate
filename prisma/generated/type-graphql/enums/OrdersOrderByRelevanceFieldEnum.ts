import * as TypeGraphQL from "type-graphql";

export enum OrdersOrderByRelevanceFieldEnum {
  bill_to_name = "bill_to_name",
  ship_to_name = "ship_to_name",
  allocated_sources = "allocated_sources",
  braintree_transaction_source = "braintree_transaction_source"
}
TypeGraphQL.registerEnumType(OrdersOrderByRelevanceFieldEnum, {
  name: "OrdersOrderByRelevanceFieldEnum",
  description: undefined,
});
