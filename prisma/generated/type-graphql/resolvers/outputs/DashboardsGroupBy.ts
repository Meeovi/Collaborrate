import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DashboardsAvgAggregate } from "../outputs/DashboardsAvgAggregate";
import { DashboardsCountAggregate } from "../outputs/DashboardsCountAggregate";
import { DashboardsMaxAggregate } from "../outputs/DashboardsMaxAggregate";
import { DashboardsMinAggregate } from "../outputs/DashboardsMinAggregate";
import { DashboardsSumAggregate } from "../outputs/DashboardsSumAggregate";

@TypeGraphQL.ObjectType("DashboardsGroupBy", {
  isAbstract: true
})
export class DashboardsGroupBy {
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
  client_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privacy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tasks!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projects!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tickets!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  checklists!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visits!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sales!: string | null;

  @TypeGraphQL.Field(_type => DashboardsCountAggregate, {
    nullable: true
  })
  _count!: DashboardsCountAggregate | null;

  @TypeGraphQL.Field(_type => DashboardsAvgAggregate, {
    nullable: true
  })
  _avg!: DashboardsAvgAggregate | null;

  @TypeGraphQL.Field(_type => DashboardsSumAggregate, {
    nullable: true
  })
  _sum!: DashboardsSumAggregate | null;

  @TypeGraphQL.Field(_type => DashboardsMinAggregate, {
    nullable: true
  })
  _min!: DashboardsMinAggregate | null;

  @TypeGraphQL.Field(_type => DashboardsMaxAggregate, {
    nullable: true
  })
  _max!: DashboardsMaxAggregate | null;
}
