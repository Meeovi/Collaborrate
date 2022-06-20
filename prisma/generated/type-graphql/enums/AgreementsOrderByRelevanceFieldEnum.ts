import * as TypeGraphQL from "type-graphql";

export enum AgreementsOrderByRelevanceFieldEnum {
  content = "content",
  name = "name",
  image = "image",
  excerpt = "excerpt",
  type = "type"
}
TypeGraphQL.registerEnumType(AgreementsOrderByRelevanceFieldEnum, {
  name: "AgreementsOrderByRelevanceFieldEnum",
  description: undefined,
});
