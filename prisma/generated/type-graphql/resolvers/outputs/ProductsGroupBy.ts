import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsAvgAggregate } from "../outputs/ProductsAvgAggregate";
import { ProductsCountAggregate } from "../outputs/ProductsCountAggregate";
import { ProductsMaxAggregate } from "../outputs/ProductsMaxAggregate";
import { ProductsMinAggregate } from "../outputs/ProductsMinAggregate";
import { ProductsSumAggregate } from "../outputs/ProductsSumAggregate";

@TypeGraphQL.ObjectType("ProductsGroupBy", {
  isAbstract: true
})
export class ProductsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  sku!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  types!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attributes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  price!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quantity_per_source!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salable_quantity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_class!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stock_status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weight!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  size!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  format!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  height!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_keywords!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacture!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  part_number!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cost_string!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacturer_part_number!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  related_product!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  brand!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occassions!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  family!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  variants!: string | null;

  @TypeGraphQL.Field(_type => ProductsCountAggregate, {
    nullable: true
  })
  _count!: ProductsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductsAvgAggregate, {
    nullable: true
  })
  _avg!: ProductsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProductsSumAggregate, {
    nullable: true
  })
  _sum!: ProductsSumAggregate | null;

  @TypeGraphQL.Field(_type => ProductsMinAggregate, {
    nullable: true
  })
  _min!: ProductsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductsMaxAggregate, {
    nullable: true
  })
  _max!: ProductsMaxAggregate | null;
}
