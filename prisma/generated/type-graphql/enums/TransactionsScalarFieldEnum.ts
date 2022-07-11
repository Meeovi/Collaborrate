import * as TypeGraphQL from "type-graphql";

export enum TransactionsScalarFieldEnum {
  id = "id",
  order_id = "order_id",
  transaction_id = "transaction_id",
  parent_transaction_id = "parent_transaction_id",
  created = "created",
  payment_method = "payment_method",
  closed = "closed"
}
TypeGraphQL.registerEnumType(TransactionsScalarFieldEnum, {
  name: "TransactionsScalarFieldEnum",
  description: undefined,
});
