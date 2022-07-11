import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZonesAvgAggregate } from "../outputs/ZonesAvgAggregate";
import { ZonesCountAggregate } from "../outputs/ZonesCountAggregate";
import { ZonesMaxAggregate } from "../outputs/ZonesMaxAggregate";
import { ZonesMinAggregate } from "../outputs/ZonesMinAggregate";
import { ZonesSumAggregate } from "../outputs/ZonesSumAggregate";

@TypeGraphQL.ObjectType("ZonesGroupBy", {
  isAbstract: true
})
export class ZonesGroupBy {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  scope!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => ZonesCountAggregate, {
    nullable: true
  })
  _count!: ZonesCountAggregate | null;

  @TypeGraphQL.Field(_type => ZonesAvgAggregate, {
    nullable: true
  })
  _avg!: ZonesAvgAggregate | null;

  @TypeGraphQL.Field(_type => ZonesSumAggregate, {
    nullable: true
  })
  _sum!: ZonesSumAggregate | null;

  @TypeGraphQL.Field(_type => ZonesMinAggregate, {
    nullable: true
  })
  _min!: ZonesMinAggregate | null;

  @TypeGraphQL.Field(_type => ZonesMaxAggregate, {
    nullable: true
  })
  _max!: ZonesMaxAggregate | null;
}
