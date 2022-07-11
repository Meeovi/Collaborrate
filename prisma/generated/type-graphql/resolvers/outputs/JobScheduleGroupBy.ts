import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobScheduleAvgAggregate } from "../outputs/JobScheduleAvgAggregate";
import { JobScheduleCountAggregate } from "../outputs/JobScheduleCountAggregate";
import { JobScheduleMaxAggregate } from "../outputs/JobScheduleMaxAggregate";
import { JobScheduleMinAggregate } from "../outputs/JobScheduleMinAggregate";
import { JobScheduleSumAggregate } from "../outputs/JobScheduleSumAggregate";

@TypeGraphQL.ObjectType("JobScheduleGroupBy", {
  isAbstract: true
})
export class JobScheduleGroupBy {
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
  jobName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  params!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startAfter!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  daysOfWeek!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timeOfDay!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lastRun!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  repeatMinutes!: number | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  rperm!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  wperm!: string[] | null;

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
