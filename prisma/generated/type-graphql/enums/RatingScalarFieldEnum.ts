import * as TypeGraphQL from "type-graphql";

export enum RatingScalarFieldEnum {
  id = "id",
  default_value = "default_value",
  default_store_view = "default_store_view",
  rating_visibility = "rating_visibility",
  active = "active",
  sort_order = "sort_order",
  prod_id = "prod_id"
}
TypeGraphQL.registerEnumType(RatingScalarFieldEnum, {
  name: "RatingScalarFieldEnum",
  description: undefined,
});
