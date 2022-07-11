import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product_attribute_set } from "../models/Product_attribute_set";
import { Products } from "../models/Products";
import { Product_attributeCount } from "../resolvers/outputs/Product_attributeCount";

@TypeGraphQL.ObjectType("Product_attribute", {
  isAbstract: true
})
export class Product_attribute {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_label?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_code?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filter_options?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  use_search?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  layered_navigation?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  search_results_layered_navigation?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  position?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  promo_rule_conditions?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  allow_html_tags_storefront?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  visible_catalog_pages_storefront?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  used_product_listing?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  used_sorting_product_listing?: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_class?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_value?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  column_options?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  faceted_navigation?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  meta_name?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | null;

  products?: Products;

  product_attribute_set?: Product_attribute_set[];

  @TypeGraphQL.Field(_type => Product_attributeCount, {
    nullable: true
  })
  _count?: Product_attributeCount | null;
}
