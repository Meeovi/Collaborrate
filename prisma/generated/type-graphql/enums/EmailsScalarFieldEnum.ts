import * as TypeGraphQL from "type-graphql";

export enum EmailsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  subject = "subject",
  content = "content",
  cust_id = "cust_id",
  bcc = "bcc",
  cc = "cc",
  from = "from",
  media = "media",
  staff_id = "staff_id"
}
TypeGraphQL.registerEnumType(EmailsScalarFieldEnum, {
  name: "EmailsScalarFieldEnum",
  description: undefined,
});
