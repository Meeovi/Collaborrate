import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DashboardsAvgAggregate } from "../outputs/DashboardsAvgAggregate";
import { DashboardsCountAggregate } from "../outputs/DashboardsCountAggregate";
import { DashboardsMaxAggregate } from "../outputs/DashboardsMaxAggregate";
import { DashboardsMinAggregate } from "../outputs/DashboardsMinAggregate";
import { DashboardsSumAggregate } from "../outputs/DashboardsSumAggregate";

@TypeGraphQL.ObjectType("AggregateDashboards", {
  isAbstract: true
})
export class AggregateDashboards {
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
