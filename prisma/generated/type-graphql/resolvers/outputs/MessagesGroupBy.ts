import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesAvgAggregate } from "../outputs/MessagesAvgAggregate";
import { MessagesCountAggregate } from "../outputs/MessagesCountAggregate";
import { MessagesMaxAggregate } from "../outputs/MessagesMaxAggregate";
import { MessagesMinAggregate } from "../outputs/MessagesMinAggregate";
import { MessagesSumAggregate } from "../outputs/MessagesSumAggregate";

@TypeGraphQL.ObjectType("MessagesGroupBy", {
  isAbstract: true
})
export class MessagesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  from!: string | null;

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
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sender!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  staff_id!: number | null;

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
