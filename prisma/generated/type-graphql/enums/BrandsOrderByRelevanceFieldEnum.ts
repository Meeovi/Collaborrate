import * as TypeGraphQL from "type-graphql";

export enum BrandsOrderByRelevanceFieldEnum {
  code = "code",
  name = "name",
  country = "country",
  state = "state",
  isPublic = "isPublic",
  city = "city",
  description = "description",
  media = "media"
}
TypeGraphQL.registerEnumType(BrandsOrderByRelevanceFieldEnum, {
  name: "BrandsOrderByRelevanceFieldEnum",
  description: undefined,
});
