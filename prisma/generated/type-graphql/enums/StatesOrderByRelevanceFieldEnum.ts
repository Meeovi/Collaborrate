import * as TypeGraphQL from "type-graphql";

export enum StatesOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  country = "country",
  image = "image"
}
TypeGraphQL.registerEnumType(StatesOrderByRelevanceFieldEnum, {
  name: "StatesOrderByRelevanceFieldEnum",
  description: undefined,
});
