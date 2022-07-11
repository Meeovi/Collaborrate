import * as TypeGraphQL from "type-graphql";

export enum WarehouseScalarFieldEnum {
  id = "id",
  created_at = "created_at",
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
TypeGraphQL.registerEnumType(WarehouseScalarFieldEnum, {
  name: "WarehouseScalarFieldEnum",
  description: undefined,
});
