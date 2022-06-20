import * as TypeGraphQL from "type-graphql";

export enum Product_typesOrderByRelevanceFieldEnum {
  type_name = "type_name",
  taxes = "taxes",
  isShippable = "isShippable",
  meta_url = "meta_url",
  meta_description = "meta_description",
  filter_options = "filter_options",
  product_type = "product_type"
}
TypeGraphQL.registerEnumType(Product_typesOrderByRelevanceFieldEnum, {
  name: "Product_typesOrderByRelevanceFieldEnum",
  description: undefined,
});
