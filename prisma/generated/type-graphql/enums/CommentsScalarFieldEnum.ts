import * as TypeGraphQL from "type-graphql";

export enum CommentsScalarFieldEnum {
  id = "id",
  customer_name = "customer_name",
  description = "description",
  image = "image",
  response = "response",
  published = "published",
  cust_id = "cust_id"
}
TypeGraphQL.registerEnumType(CommentsScalarFieldEnum, {
  name: "CommentsScalarFieldEnum",
  description: undefined,
});
