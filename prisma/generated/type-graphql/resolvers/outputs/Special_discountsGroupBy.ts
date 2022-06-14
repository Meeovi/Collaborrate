import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Special_discountsAvgAggregate } from "../outputs/Special_discountsAvgAggregate";
import { Special_discountsCountAggregate } from "../outputs/Special_discountsCountAggregate";
import { Special_discountsMaxAggregate } from "../outputs/Special_discountsMaxAggregate";
import { Special_discountsMinAggregate } from "../outputs/Special_discountsMinAggregate";
import { Special_discountsSumAggregate } from "../outputs/Special_discountsSumAggregate";

@TypeGraphQL.ObjectType("Special_discountsGroupBy", {
  isAbstract: true
})
export class Special_discountsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discount!: Prisma.Decimal | null;

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
  rewards!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiration!: Date | null;

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

  @TypeGraphQL.Field(_type => Special_discountsCountAggregate, {
    nullable: true
  })
  _count!: Special_discountsCountAggregate | null;

  @TypeGraphQL.Field(_type => Special_discountsAvgAggregate, {
    nullable: true
  })
  _avg!: Special_discountsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Special_discountsSumAggregate, {
    nullable: true
  })
  _sum!: Special_discountsSumAggregate | null;

  @TypeGraphQL.Field(_type => Special_discountsMinAggregate, {
    nullable: true
  })
  _min!: Special_discountsMinAggregate | null;

  @TypeGraphQL.Field(_type => Special_discountsMaxAggregate, {
    nullable: true
  })
  _max!: Special_discountsMaxAggregate | null;
}
