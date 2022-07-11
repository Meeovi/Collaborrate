import * as TypeGraphQL from "type-graphql";

export enum InvitationsOrderByRelevanceFieldEnum {
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
TypeGraphQL.registerEnumType(InvitationsOrderByRelevanceFieldEnum, {
  name: "InvitationsOrderByRelevanceFieldEnum",
  description: undefined,
});
