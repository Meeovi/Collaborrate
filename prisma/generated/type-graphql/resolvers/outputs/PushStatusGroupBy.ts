import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PushStatusAvgAggregate } from "../outputs/PushStatusAvgAggregate";
import { PushStatusCountAggregate } from "../outputs/PushStatusCountAggregate";
import { PushStatusMaxAggregate } from "../outputs/PushStatusMaxAggregate";
import { PushStatusMinAggregate } from "../outputs/PushStatusMinAggregate";
import { PushStatusSumAggregate } from "../outputs/PushStatusSumAggregate";

@TypeGraphQL.ObjectType("PushStatusGroupBy", {
  isAbstract: true
})
export class PushStatusGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pushTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  query!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payload!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  expiry!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  expiration_interval!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  numSent!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  numFailed!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pushHash!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  errorMessage!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  sentPerType!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  failedPerType!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  sentPerUTCOffset!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  failedPerUTCOffset!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  count!: number | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  rperm!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  wperm!: string[] | null;

  @TypeGraphQL.Field(_type => PushStatusCountAggregate, {
    nullable: true
  })
  _count!: PushStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => PushStatusAvgAggregate, {
    nullable: true
  })
  _avg!: PushStatusAvgAggregate | null;

  @TypeGraphQL.Field(_type => PushStatusSumAggregate, {
    nullable: true
  })
  _sum!: PushStatusSumAggregate | null;

  @TypeGraphQL.Field(_type => PushStatusMinAggregate, {
    nullable: true
  })
  _min!: PushStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => PushStatusMaxAggregate, {
    nullable: true
  })
  _max!: PushStatusMaxAggregate | null;
}
