import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setCreateNestedManyWithoutProduct_attributeInput } from "../inputs/Product_attribute_setCreateNestedManyWithoutProduct_attributeInput";

@TypeGraphQL.InputType("Product_attributeCreateWithoutProductsInput", {
  isAbstract: true
})
export class Product_attributeCreateWithoutProductsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_label?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filter_options?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  use_search?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  layered_navigation?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  search_results_layered_navigation?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  position?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  promo_rule_conditions?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  allow_html_tags_storefront?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  visible_catalog_pages_storefront?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  used_product_listing?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  used_sorting_product_listing?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_class?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attribute_value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  column_options?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  faceted_navigation?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  meta_name?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setCreateNestedManyWithoutProduct_attributeInput, {
    nullable: true
  })
  product_attribute_set?: Product_attribute_setCreateNestedManyWithoutProduct_attributeInput | undefined;
}
