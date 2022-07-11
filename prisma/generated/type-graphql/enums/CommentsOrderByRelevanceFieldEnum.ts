import * as TypeGraphQL from "type-graphql";

export enum CommentsOrderByRelevanceFieldEnum {
  customer_name = "customer_name",
  description = "description",
  image = "image",
  response = "response"
}
TypeGraphQL.registerEnumType(CommentsOrderByRelevanceFieldEnum, {
  name: "CommentsOrderByRelevanceFieldEnum",
  description: undefined,
});
