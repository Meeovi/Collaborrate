import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MeetingAvgAggregate } from "../outputs/MeetingAvgAggregate";
import { MeetingCountAggregate } from "../outputs/MeetingCountAggregate";
import { MeetingMaxAggregate } from "../outputs/MeetingMaxAggregate";
import { MeetingMinAggregate } from "../outputs/MeetingMinAggregate";
import { MeetingSumAggregate } from "../outputs/MeetingSumAggregate";

@TypeGraphQL.ObjectType("AggregateMeeting", {
  isAbstract: true
})
export class AggregateMeeting {
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
