import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventsAvgAggregate } from "../outputs/EventsAvgAggregate";
import { EventsCountAggregate } from "../outputs/EventsCountAggregate";
import { EventsMaxAggregate } from "../outputs/EventsMaxAggregate";
import { EventsMinAggregate } from "../outputs/EventsMinAggregate";
import { EventsSumAggregate } from "../outputs/EventsSumAggregate";

@TypeGraphQL.ObjectType("EventsGroupBy", {
  isAbstract: true
})
export class EventsGroupBy {
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
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tickets!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postalcode!: string | null;

  @TypeGraphQL.Field(_type => EventsCountAggregate, {
    nullable: true
  })
  _count!: EventsCountAggregate | null;

  @TypeGraphQL.Field(_type => EventsAvgAggregate, {
    nullable: true
  })
  _avg!: EventsAvgAggregate | null;

  @TypeGraphQL.Field(_type => EventsSumAggregate, {
    nullable: true
  })
  _sum!: EventsSumAggregate | null;

  @TypeGraphQL.Field(_type => EventsMinAggregate, {
    nullable: true
  })
  _min!: EventsMinAggregate | null;

  @TypeGraphQL.Field(_type => EventsMaxAggregate, {
    nullable: true
  })
  _max!: EventsMaxAggregate | null;
}
