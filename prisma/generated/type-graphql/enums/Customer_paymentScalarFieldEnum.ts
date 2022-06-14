import * as TypeGraphQL from "type-graphql";

export enum Customer_paymentScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  cust_id = "cust_id",
  payment_info = "payment_info",
  provider = "provider",
  account_no = "account_no",
  expiry = "expiry"
}
TypeGraphQL.registerEnumType(Customer_paymentScalarFieldEnum, {
  name: "Customer_paymentScalarFieldEnum",
  description: undefined,
});
