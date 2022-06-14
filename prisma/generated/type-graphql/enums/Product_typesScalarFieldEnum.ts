import * as TypeGraphQL from "type-graphql";

export enum Product_typesScalarFieldEnum {
  id = "id",
  type_name = "type_name",
  taxes = "taxes",
  isShippable = "isShippable",
  meta_url = "meta_url",
  meta_description = "meta_description",
  filter_options = "filter_options",
  product_type = "product_type",
  prod_id = "prod_id"
}
TypeGraphQL.registerEnumType(Product_typesScalarFieldEnum, {
  name: "Product_typesScalarFieldEnum",
  description: undefined,
});
