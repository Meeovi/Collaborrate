import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsAvgAggregate } from "../outputs/BrandsAvgAggregate";
import { BrandsCountAggregate } from "../outputs/BrandsCountAggregate";
import { BrandsMaxAggregate } from "../outputs/BrandsMaxAggregate";
import { BrandsMinAggregate } from "../outputs/BrandsMinAggregate";
import { BrandsSumAggregate } from "../outputs/BrandsSumAggregate";

@TypeGraphQL.ObjectType("BrandsGroupBy", {
  isAbstract: true
})
export class BrandsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  product!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => BrandsCountAggregate, {
    nullable: true
  })
  _count!: BrandsCountAggregate | null;

  @TypeGraphQL.Field(_type => BrandsAvgAggregate, {
    nullable: true
  })
  _avg!: BrandsAvgAggregate | null;

  @TypeGraphQL.Field(_type => BrandsSumAggregate, {
    nullable: true
  })
  _sum!: BrandsSumAggregate | null;

  @TypeGraphQL.Field(_type => BrandsMinAggregate, {
    nullable: true
  })
  _min!: BrandsMinAggregate | null;

  @TypeGraphQL.Field(_type => BrandsMaxAggregate, {
    nullable: true
  })
  _max!: BrandsMaxAggregate | null;
}
