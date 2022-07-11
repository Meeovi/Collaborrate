import * as TypeGraphQL from "type-graphql";

export enum CasesOrderByRelevanceFieldEnum {
  state = "state",
  type = "type",
  subject = "subject",
  description = "description",
  resolution = "resolution",
  priority = "priority",
  status = "status",
  account_name = "account_name",
  assigned_to = "assigned_to"
}
TypeGraphQL.registerEnumType(CasesOrderByRelevanceFieldEnum, {
  name: "CasesOrderByRelevanceFieldEnum",
  description: undefined,
});
