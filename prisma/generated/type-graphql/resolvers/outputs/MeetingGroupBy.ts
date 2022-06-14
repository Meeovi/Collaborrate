import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MeetingAvgAggregate } from "../outputs/MeetingAvgAggregate";
import { MeetingCountAggregate } from "../outputs/MeetingCountAggregate";
import { MeetingMaxAggregate } from "../outputs/MeetingMaxAggregate";
import { MeetingMinAggregate } from "../outputs/MeetingMinAggregate";
import { MeetingSumAggregate } from "../outputs/MeetingSumAggregate";

@TypeGraphQL.ObjectType("MeetingGroupBy", {
  isAbstract: true
})
export class MeetingGroupBy {
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
  subject!: string | null;

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
  duration!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  related_to!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reminders!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invitees!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  scheduling!: string | null;

  @TypeGraphQL.Field(_type => MeetingCountAggregate, {
    nullable: true
  })
  _count!: MeetingCountAggregate | null;

  @TypeGraphQL.Field(_type => MeetingAvgAggregate, {
    nullable: true
  })
  _avg!: MeetingAvgAggregate | null;

  @TypeGraphQL.Field(_type => MeetingSumAggregate, {
    nullable: true
  })
  _sum!: MeetingSumAggregate | null;

  @TypeGraphQL.Field(_type => MeetingMinAggregate, {
    nullable: true
  })
  _min!: MeetingMinAggregate | null;

  @TypeGraphQL.Field(_type => MeetingMaxAggregate, {
    nullable: true
  })
  _max!: MeetingMaxAggregate | null;
}
