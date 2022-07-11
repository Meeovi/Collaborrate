import * as TypeGraphQL from "type-graphql";

export enum ReviewsScalarFieldEnum {
  id = "id",
  first_name = "first_name",
  last_name = "last_name",
  content = "content",
  websites = "websites",
  created_at = "created_at",
  shop_id = "shop_id",
  comment_id = "comment_id"
}
TypeGraphQL.registerEnumType(ReviewsScalarFieldEnum, {
  name: "ReviewsScalarFieldEnum",
  description: undefined,
});
