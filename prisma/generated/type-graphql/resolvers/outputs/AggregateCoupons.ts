import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsAvgAggregate } from "../outputs/CouponsAvgAggregate";
import { CouponsCountAggregate } from "../outputs/CouponsCountAggregate";
import { CouponsMaxAggregate } from "../outputs/CouponsMaxAggregate";
import { CouponsMinAggregate } from "../outputs/CouponsMinAggregate";
import { CouponsSumAggregate } from "../outputs/CouponsSumAggregate";

@TypeGraphQL.ObjectType("AggregateCoupons", {
  isAbstract: true
})
export class AggregateCoupons {
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
