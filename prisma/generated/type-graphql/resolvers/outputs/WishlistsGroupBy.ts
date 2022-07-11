import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistsAvgAggregate } from "../outputs/WishlistsAvgAggregate";
import { WishlistsCountAggregate } from "../outputs/WishlistsCountAggregate";
import { WishlistsMaxAggregate } from "../outputs/WishlistsMaxAggregate";
import { WishlistsMinAggregate } from "../outputs/WishlistsMinAggregate";
import { WishlistsSumAggregate } from "../outputs/WishlistsSumAggregate";

@TypeGraphQL.ObjectType("WishlistsGroupBy", {
  isAbstract: true
})
export class WishlistsGroupBy {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quantity!: string | null;

  @TypeGraphQL.Field(_type => WishlistsCountAggregate, {
    nullable: true
  })
  _count!: WishlistsCountAggregate | null;

  @TypeGraphQL.Field(_type => WishlistsAvgAggregate, {
    nullable: true
  })
  _avg!: WishlistsAvgAggregate | null;

  @TypeGraphQL.Field(_type => WishlistsSumAggregate, {
    nullable: true
  })
  _sum!: WishlistsSumAggregate | null;

  @TypeGraphQL.Field(_type => WishlistsMinAggregate, {
    nullable: true
  })
  _min!: WishlistsMinAggregate | null;

  @TypeGraphQL.Field(_type => WishlistsMaxAggregate, {
    nullable: true
  })
  _max!: WishlistsMaxAggregate | null;
}
