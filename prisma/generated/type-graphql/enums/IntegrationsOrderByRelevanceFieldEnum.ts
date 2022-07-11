import * as TypeGraphQL from "type-graphql";

export enum IntegrationsOrderByRelevanceFieldEnum {
  name = "name",
  content = "content",
  media = "media",
  location = "location",
  category = "category"
}
TypeGraphQL.registerEnumType(IntegrationsOrderByRelevanceFieldEnum, {
  name: "IntegrationsOrderByRelevanceFieldEnum",
  description: undefined,
});
