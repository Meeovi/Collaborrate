import * as TypeGraphQL from "type-graphql";

export enum MessagesScalarFieldEnum {
  id = "id",
  from = "from",
  created_at = "created_at",
  subject = "subject",
  content = "content",
  sender = "sender",
  cust_id = "cust_id",
  media = "media",
  staff_id = "staff_id"
}
TypeGraphQL.registerEnumType(MessagesScalarFieldEnum, {
  name: "MessagesScalarFieldEnum",
  description: undefined,
});
