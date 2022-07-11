import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeAvgAggregate } from "../outputs/Product_attributeAvgAggregate";
import { Product_attributeCountAggregate } from "../outputs/Product_attributeCountAggregate";
import { Product_attributeMaxAggregate } from "../outputs/Product_attributeMaxAggregate";
import { Product_attributeMinAggregate } from "../outputs/Product_attributeMinAggregate";
import { Product_attributeSumAggregate } from "../outputs/Product_attributeSumAggregate";

@TypeGraphQL.ObjectType("Product_attributeGroupBy", {
  isAbstract: true
})
export class Product_attributeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
    nullable: false
  })
  prod_id!: bigint;

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

  @TypeGraphQL.Field(_type => Product_attributeCountAggregate, {
    nullable: true
  })
  _count!: Product_attributeCountAggregate | null;

  @TypeGraphQL.Field(_type => Product_attributeAvgAggregate, {
    nullable: true
  })
  _avg!: Product_attributeAvgAggregate | null;

  @TypeGraphQL.Field(_type => Product_attributeSumAggregate, {
    nullable: true
  })
  _sum!: Product_attributeSumAggregate | null;

  @TypeGraphQL.Field(_type => Product_attributeMinAggregate, {
    nullable: true
  })
  _min!: Product_attributeMinAggregate | null;

  @TypeGraphQL.Field(_type => Product_attributeMaxAggregate, {
    nullable: true
  })
  _max!: Product_attributeMaxAggregate | null;
}
