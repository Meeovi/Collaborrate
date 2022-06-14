import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketingAvgAggregate } from "../outputs/TicketingAvgAggregate";
import { TicketingCountAggregate } from "../outputs/TicketingCountAggregate";
import { TicketingMaxAggregate } from "../outputs/TicketingMaxAggregate";
import { TicketingMinAggregate } from "../outputs/TicketingMinAggregate";
import { TicketingSumAggregate } from "../outputs/TicketingSumAggregate";

@TypeGraphQL.ObjectType("AggregateTicketing", {
  isAbstract: true
})
export class AggregateTicketing {
  @TypeGraphQL.Field(_type => TicketingCountAggregate, {
    nullable: true
  })
  _count!: TicketingCountAggregate | null;

  @TypeGraphQL.Field(_type => TicketingAvgAggregate, {
    nullable: true
  })
  _avg!: TicketingAvgAggregate | null;

  @TypeGraphQL.Field(_type => TicketingSumAggregate, {
    nullable: true
  })
  _sum!: TicketingSumAggregate | null;

  @TypeGraphQL.Field(_type => TicketingMinAggregate, {
    nullable: true
  })
  _min!: TicketingMinAggregate | null;

  @TypeGraphQL.Field(_type => TicketingMaxAggregate, {
    nullable: true
  })
  _max!: TicketingMaxAggregate | null;
}
