import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportsAvgAggregate } from "../outputs/ReportsAvgAggregate";
import { ReportsCountAggregate } from "../outputs/ReportsCountAggregate";
import { ReportsMaxAggregate } from "../outputs/ReportsMaxAggregate";
import { ReportsMinAggregate } from "../outputs/ReportsMinAggregate";
import { ReportsSumAggregate } from "../outputs/ReportsSumAggregate";

@TypeGraphQL.ObjectType("AggregateReports", {
  isAbstract: true
})
export class AggregateReports {
  @TypeGraphQL.Field(_type => ReportsCountAggregate, {
    nullable: true
  })
  _count!: ReportsCountAggregate | null;

  @TypeGraphQL.Field(_type => ReportsAvgAggregate, {
    nullable: true
  })
  _avg!: ReportsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReportsSumAggregate, {
    nullable: true
  })
  _sum!: ReportsSumAggregate | null;

  @TypeGraphQL.Field(_type => ReportsMinAggregate, {
    nullable: true
  })
  _min!: ReportsMinAggregate | null;

  @TypeGraphQL.Field(_type => ReportsMaxAggregate, {
    nullable: true
  })
  _max!: ReportsMaxAggregate | null;
}
