import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobScheduleAvgAggregate } from "../outputs/JobScheduleAvgAggregate";
import { JobScheduleCountAggregate } from "../outputs/JobScheduleCountAggregate";
import { JobScheduleMaxAggregate } from "../outputs/JobScheduleMaxAggregate";
import { JobScheduleMinAggregate } from "../outputs/JobScheduleMinAggregate";
import { JobScheduleSumAggregate } from "../outputs/JobScheduleSumAggregate";

@TypeGraphQL.ObjectType("AggregateJobSchedule", {
  isAbstract: true
})
export class AggregateJobSchedule {
  @TypeGraphQL.Field(_type => JobScheduleCountAggregate, {
    nullable: true
  })
  _count!: JobScheduleCountAggregate | null;

  @TypeGraphQL.Field(_type => JobScheduleAvgAggregate, {
    nullable: true
  })
  _avg!: JobScheduleAvgAggregate | null;

  @TypeGraphQL.Field(_type => JobScheduleSumAggregate, {
    nullable: true
  })
  _sum!: JobScheduleSumAggregate | null;

  @TypeGraphQL.Field(_type => JobScheduleMinAggregate, {
    nullable: true
  })
  _min!: JobScheduleMinAggregate | null;

  @TypeGraphQL.Field(_type => JobScheduleMaxAggregate, {
    nullable: true
  })
  _max!: JobScheduleMaxAggregate | null;
}
