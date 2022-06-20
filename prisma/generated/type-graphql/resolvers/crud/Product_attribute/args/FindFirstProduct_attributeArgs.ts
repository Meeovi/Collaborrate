import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_attributeOrderByWithRelationAndSearchRelevanceInput";
import { Product_attributeWhereInput } from "../../../inputs/Product_attributeWhereInput";
import { Product_attributeWhereUniqueInput } from "../../../inputs/Product_attributeWhereUniqueInput";
import { Product_attributeScalarFieldEnum } from "../../../../enums/Product_attributeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  where?: Product_attributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_attributeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_attributeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "default_label" | "attribute_code" | "filter_options" | "use_search" | "layered_navigation" | "search_results_layered_navigation" | "position" | "promo_rule_conditions" | "allow_html_tags_storefront" | "visible_catalog_pages_storefront" | "used_product_listing" | "used_sorting_product_listing" | "prod_id" | "attribute_class" | "attribute_value" | "column_options" | "faceted_navigation" | "isPublic" | "meta_description" | "meta_name" | "meta_url"> | undefined;
}
