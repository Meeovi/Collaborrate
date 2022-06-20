import * as TypeGraphQL from "type-graphql";

export enum ManufacturerOrderByRelevanceFieldEnum {
  code = "code",
  name = "name",
  country = "country",
  state = "state",
  isPublic = "isPublic",
  city = "city",
  description = "description",
  media = "media"
}
TypeGraphQL.registerEnumType(ManufacturerOrderByRelevanceFieldEnum, {
  name: "ManufacturerOrderByRelevanceFieldEnum",
  description: undefined,
});
