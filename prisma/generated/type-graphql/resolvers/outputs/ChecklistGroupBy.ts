import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistAvgAggregate } from "../outputs/ChecklistAvgAggregate";
import { ChecklistCountAggregate } from "../outputs/ChecklistCountAggregate";
import { ChecklistMaxAggregate } from "../outputs/ChecklistMaxAggregate";
import { ChecklistMinAggregate } from "../outputs/ChecklistMinAggregate";
import { ChecklistSumAggregate } from "../outputs/ChecklistSumAggregate";

@TypeGraphQL.ObjectType("ChecklistGroupBy", {
  isAbstract: true
})
export class ChecklistGroupBy {
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
  username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  regional_manager!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manager!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ticket!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prod_id!: string | null;

  @TypeGraphQL.Field(_type => ChecklistCountAggregate, {
    nullable: true
  })
  _count!: ChecklistCountAggregate | null;

  @TypeGraphQL.Field(_type => ChecklistAvgAggregate, {
    nullable: true
  })
  _avg!: ChecklistAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChecklistSumAggregate, {
    nullable: true
  })
  _sum!: ChecklistSumAggregate | null;

  @TypeGraphQL.Field(_type => ChecklistMinAggregate, {
    nullable: true
  })
  _min!: ChecklistMinAggregate | null;

  @TypeGraphQL.Field(_type => ChecklistMaxAggregate, {
    nullable: true
  })
  _max!: ChecklistMaxAggregate | null;
}
