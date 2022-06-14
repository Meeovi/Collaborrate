import * as TypeGraphQL from "type-graphql";

export enum OccassionsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  code = "code",
  name = "name",
  category = "category",
  tags = "tags",
  description = "description",
  products = "products",
  wishlists = "wishlists"
}
TypeGraphQL.registerEnumType(OccassionsScalarFieldEnum, {
  name: "OccassionsScalarFieldEnum",
  description: undefined,
});
