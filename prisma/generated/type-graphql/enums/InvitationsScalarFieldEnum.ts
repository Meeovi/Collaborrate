import * as TypeGraphQL from "type-graphql";

export enum InvitationsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  invoiceDate = "invoiceDate",
  email = "email",
  billingAddress = "billingAddress",
  shippingAddress = "shippingAddress",
  orderNumber = "orderNumber",
  grandTotalPurchased = "grandTotalPurchased",
  paymentMethod = "paymentMethod",
  status = "status",
  media = "media",
  content = "content"
}
TypeGraphQL.registerEnumType(InvitationsScalarFieldEnum, {
  name: "InvitationsScalarFieldEnum",
  description: undefined,
});
