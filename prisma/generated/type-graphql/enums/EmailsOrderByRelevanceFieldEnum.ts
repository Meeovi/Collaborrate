import * as TypeGraphQL from "type-graphql";

export enum EmailsOrderByRelevanceFieldEnum {
  subject = "subject",
  content = "content",
  bcc = "bcc",
  cc = "cc",
  from = "from",
  media = "media"
}
TypeGraphQL.registerEnumType(EmailsOrderByRelevanceFieldEnum, {
  name: "EmailsOrderByRelevanceFieldEnum",
  description: undefined,
});
