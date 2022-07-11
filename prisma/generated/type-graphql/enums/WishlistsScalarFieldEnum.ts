import * as TypeGraphQL from "type-graphql";

export enum WishlistsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  customers = "customers",
  visibility = "visibility",
  products = "products",
  quantity = "quantity"
}
TypeGraphQL.registerEnumType(WishlistsScalarFieldEnum, {
  name: "WishlistsScalarFieldEnum",
  description: undefined,
});
