import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesAvgAggregate } from "../outputs/MessagesAvgAggregate";
import { MessagesCountAggregate } from "../outputs/MessagesCountAggregate";
import { MessagesMaxAggregate } from "../outputs/MessagesMaxAggregate";
import { MessagesMinAggregate } from "../outputs/MessagesMinAggregate";
import { MessagesSumAggregate } from "../outputs/MessagesSumAggregate";

@TypeGraphQL.ObjectType("AggregateMessages", {
  isAbstract: true
})
export class AggregateMessages {
  @TypeGraphQL.Field(_type => MessagesCountAggregate, {
    nullable: true
  })
  _count!: MessagesCountAggregate | null;

  @TypeGraphQL.Field(_type => MessagesAvgAggregate, {
    nullable: true
  })
  _avg!: MessagesAvgAggregate | null;

  @TypeGraphQL.Field(_type => MessagesSumAggregate, {
    nullable: true
  })
  _sum!: MessagesSumAggregate | null;

  @TypeGraphQL.Field(_type => MessagesMinAggregate, {
    nullable: true
  })
  _min!: MessagesMinAggregate | null;

  @TypeGraphQL.Field(_type => MessagesMaxAggregate, {
    nullable: true
  })
  _max!: MessagesMaxAggregate | null;
}
