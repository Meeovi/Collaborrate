import * as TypeGraphQL from "type-graphql";

export enum UserOrderByRelevanceFieldEnum {
  objectId = "objectId",
  username = "username",
  email = "email",
  rperm = "rperm",
  wperm = "wperm",
  hashed_password = "hashed_password",
  email_verify_token = "email_verify_token",
  perishable_token = "perishable_token"
}
TypeGraphQL.registerEnumType(UserOrderByRelevanceFieldEnum, {
  name: "UserOrderByRelevanceFieldEnum",
  description: undefined,
});
