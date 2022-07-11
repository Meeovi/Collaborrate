import * as TypeGraphQL from "type-graphql";

export enum ReviewsOrderByRelevanceFieldEnum {
  first_name = "first_name",
  last_name = "last_name",
  content = "content",
  websites = "websites"
}
TypeGraphQL.registerEnumType(ReviewsOrderByRelevanceFieldEnum, {
  name: "ReviewsOrderByRelevanceFieldEnum",
  description: undefined,
});
