import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeAvgOrderByAggregateInput } from "../inputs/Product_attributeAvgOrderByAggregateInput";
import { Product_attributeCountOrderByAggregateInput } from "../inputs/Product_attributeCountOrderByAggregateInput";
import { Product_attributeMaxOrderByAggregateInput } from "../inputs/Product_attributeMaxOrderByAggregateInput";
import { Product_attributeMinOrderByAggregateInput } from "../inputs/Product_attributeMinOrderByAggregateInput";
import { Product_attributeSumOrderByAggregateInput } from "../inputs/Product_attributeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_attributeOrderByWithAggregationInput", {
  isAbstract: true
})
export class Product_attributeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_label?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attribute_code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  filter_options?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  use_search?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  layered_navigation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  search_results_layered_navigation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  promo_rule_conditions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_html_tags_storefront?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visible_catalog_pages_storefront?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  used_product_listing?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  used_sorting_product_listing?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attribute_class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attribute_value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  column_options?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  faceted_navigation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_attributeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_attributeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_attributeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_attributeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_attributeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_attributeSumOrderByAggregateInput | undefined;
}
