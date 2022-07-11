import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsAvgAggregate } from "../outputs/ReturnsAvgAggregate";
import { ReturnsCountAggregate } from "../outputs/ReturnsCountAggregate";
import { ReturnsMaxAggregate } from "../outputs/ReturnsMaxAggregate";
import { ReturnsMinAggregate } from "../outputs/ReturnsMinAggregate";
import { ReturnsSumAggregate } from "../outputs/ReturnsSumAggregate";

@TypeGraphQL.ObjectType("ReturnsGroupBy", {
  isAbstract: true
})
export class ReturnsGroupBy {
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
  validity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  return_prefix!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => ReturnsCountAggregate, {
    nullable: true
  })
  _count!: ReturnsCountAggregate | null;

  @TypeGraphQL.Field(_type => ReturnsAvgAggregate, {
    nullable: true
  })
  _avg!: ReturnsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReturnsSumAggregate, {
    nullable: true
  })
  _sum!: ReturnsSumAggregate | null;

  @TypeGraphQL.Field(_type => ReturnsMinAggregate, {
    nullable: true
  })
  _min!: ReturnsMinAggregate | null;

  @TypeGraphQL.Field(_type => ReturnsMaxAggregate, {
    nullable: true
  })
  _max!: ReturnsMaxAggregate | null;
}
