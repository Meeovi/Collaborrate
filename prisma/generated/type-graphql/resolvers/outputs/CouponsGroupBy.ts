import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsAvgAggregate } from "../outputs/CouponsAvgAggregate";
import { CouponsCountAggregate } from "../outputs/CouponsCountAggregate";
import { CouponsMaxAggregate } from "../outputs/CouponsMaxAggregate";
import { CouponsMinAggregate } from "../outputs/CouponsMinAggregate";
import { CouponsSumAggregate } from "../outputs/CouponsSumAggregate";

@TypeGraphQL.ObjectType("CouponsGroupBy", {
  isAbstract: true
})
export class CouponsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discount!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expiration!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  @TypeGraphQL.Field(_type => CouponsCountAggregate, {
    nullable: true
  })
  _count!: CouponsCountAggregate | null;

  @TypeGraphQL.Field(_type => CouponsAvgAggregate, {
    nullable: true
  })
  _avg!: CouponsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CouponsSumAggregate, {
    nullable: true
  })
  _sum!: CouponsSumAggregate | null;

  @TypeGraphQL.Field(_type => CouponsMinAggregate, {
    nullable: true
  })
  _min!: CouponsMinAggregate | null;

  @TypeGraphQL.Field(_type => CouponsMaxAggregate, {
    nullable: true
  })
  _max!: CouponsMaxAggregate | null;
}
