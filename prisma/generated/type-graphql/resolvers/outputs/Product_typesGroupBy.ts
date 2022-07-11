import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesAvgAggregate } from "../outputs/Product_typesAvgAggregate";
import { Product_typesCountAggregate } from "../outputs/Product_typesCountAggregate";
import { Product_typesMaxAggregate } from "../outputs/Product_typesMaxAggregate";
import { Product_typesMinAggregate } from "../outputs/Product_typesMinAggregate";
import { Product_typesSumAggregate } from "../outputs/Product_typesSumAggregate";

@TypeGraphQL.ObjectType("Product_typesGroupBy", {
  isAbstract: true
})
export class Product_typesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isShippable!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filter_options!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_type!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  @TypeGraphQL.Field(_type => Product_typesCountAggregate, {
    nullable: true
  })
  _count!: Product_typesCountAggregate | null;

  @TypeGraphQL.Field(_type => Product_typesAvgAggregate, {
    nullable: true
  })
  _avg!: Product_typesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Product_typesSumAggregate, {
    nullable: true
  })
  _sum!: Product_typesSumAggregate | null;

  @TypeGraphQL.Field(_type => Product_typesMinAggregate, {
    nullable: true
  })
  _min!: Product_typesMinAggregate | null;

  @TypeGraphQL.Field(_type => Product_typesMaxAggregate, {
    nullable: true
  })
  _max!: Product_typesMaxAggregate | null;
}
