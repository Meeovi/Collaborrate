import * as TypeGraphQL from "type-graphql";

export enum DeepdiveOrderByRelevanceFieldEnum {
  end_date = "end_date",
  content = "content",
  attendees = "attendees",
  login = "login",
  start_date = "start_date",
  whid = "whid"
}
TypeGraphQL.registerEnumType(DeepdiveOrderByRelevanceFieldEnum, {
  name: "DeepdiveOrderByRelevanceFieldEnum",
  description: undefined,
});
