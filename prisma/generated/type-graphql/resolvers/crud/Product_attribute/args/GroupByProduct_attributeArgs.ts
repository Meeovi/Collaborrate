import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeOrderByWithAggregationInput } from "../../../inputs/Product_attributeOrderByWithAggregationInput";
import { Product_attributeScalarWhereWithAggregatesInput } from "../../../inputs/Product_attributeScalarWhereWithAggregatesInput";
import { Product_attributeWhereInput } from "../../../inputs/Product_attributeWhereInput";
import { Product_attributeScalarFieldEnum } from "../../../../enums/Product_attributeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  where?: Product_attributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_attributeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "default_label" | "attribute_code" | "filter_options" | "use_search" | "layered_navigation" | "search_results_layered_navigation" | "position" | "promo_rule_conditions" | "allow_html_tags_storefront" | "visible_catalog_pages_storefront" | "used_product_listing" | "used_sorting_product_listing" | "prod_id" | "attribute_class" | "attribute_value" | "column_options" | "faceted_navigation" | "isPublic" | "meta_description" | "meta_name" | "meta_url">;

  @TypeGraphQL.Field(_type => Product_attributeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_attributeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
