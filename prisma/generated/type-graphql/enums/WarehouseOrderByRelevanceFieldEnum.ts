import * as TypeGraphQL from "type-graphql";

export enum WarehouseOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  city = "city",
  state = "state",
  country = "country",
  postal = "postal",
  status = "status",
  image = "image",
  products = "products",
  category = "category",
  isPublic = "isPublic"
}
TypeGraphQL.registerEnumType(WarehouseOrderByRelevanceFieldEnum, {
  name: "WarehouseOrderByRelevanceFieldEnum",
  description: undefined,
});
