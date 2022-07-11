import * as TypeGraphQL from "type-graphql";

export enum RatingOrderByRelevanceFieldEnum {
  default_value = "default_value",
  default_store_view = "default_store_view",
  rating_visibility = "rating_visibility"
}
TypeGraphQL.registerEnumType(RatingOrderByRelevanceFieldEnum, {
  name: "RatingOrderByRelevanceFieldEnum",
  description: undefined,
});
