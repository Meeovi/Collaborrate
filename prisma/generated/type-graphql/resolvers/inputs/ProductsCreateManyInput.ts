import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProductsCreateManyInput", {
  isAbstract: true
})
export class ProductsCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  sku?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  types?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attributes?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  price?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quantity_per_source?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salable_quantity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_class?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stock_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weight?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  size?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  format?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  height?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_keywords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacture?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  part_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cost_string?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacturer_part_number?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  related_product?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  brand?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occassions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  family?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  variants?: string | undefined;
}
