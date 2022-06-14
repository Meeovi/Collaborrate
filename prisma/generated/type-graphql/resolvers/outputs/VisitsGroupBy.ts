import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisitsAvgAggregate } from "../outputs/VisitsAvgAggregate";
import { VisitsCountAggregate } from "../outputs/VisitsCountAggregate";
import { VisitsMaxAggregate } from "../outputs/VisitsMaxAggregate";
import { VisitsMinAggregate } from "../outputs/VisitsMinAggregate";
import { VisitsSumAggregate } from "../outputs/VisitsSumAggregate";

@TypeGraphQL.ObjectType("VisitsGroupBy", {
  isAbstract: true
})
export class VisitsGroupBy {
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
  location!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  emergency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meeting!: string | null;

  @TypeGraphQL.Field(_type => VisitsCountAggregate, {
    nullable: true
  })
  _count!: VisitsCountAggregate | null;

  @TypeGraphQL.Field(_type => VisitsAvgAggregate, {
    nullable: true
  })
  _avg!: VisitsAvgAggregate | null;

  @TypeGraphQL.Field(_type => VisitsSumAggregate, {
    nullable: true
  })
  _sum!: VisitsSumAggregate | null;

  @TypeGraphQL.Field(_type => VisitsMinAggregate, {
    nullable: true
  })
  _min!: VisitsMinAggregate | null;

  @TypeGraphQL.Field(_type => VisitsMaxAggregate, {
    nullable: true
  })
  _max!: VisitsMaxAggregate | null;
}
