import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Product_attributeMaxAggregate", {
  isAbstract: true
})
export class Product_attributeMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_label!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filter_options!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  use_search!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  layered_navigation!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  search_results_layered_navigation!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  position!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  promo_rule_conditions!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  allow_html_tags_storefront!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  visible_catalog_pages_storefront!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  used_product_listing!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  used_sorting_product_listing!: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  prod_id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_class!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_value!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  column_options!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  faceted_navigation!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  meta_name!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url!: string | null;
}
