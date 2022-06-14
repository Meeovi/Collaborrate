import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebhooksAvgAggregate } from "../outputs/WebhooksAvgAggregate";
import { WebhooksCountAggregate } from "../outputs/WebhooksCountAggregate";
import { WebhooksMaxAggregate } from "../outputs/WebhooksMaxAggregate";
import { WebhooksMinAggregate } from "../outputs/WebhooksMinAggregate";
import { WebhooksSumAggregate } from "../outputs/WebhooksSumAggregate";

@TypeGraphQL.ObjectType("AggregateWebhooks", {
  isAbstract: true
})
export class AggregateWebhooks {
  @TypeGraphQL.Field(_type => WebhooksCountAggregate, {
    nullable: true
  })
  _count!: WebhooksCountAggregate | null;

  @TypeGraphQL.Field(_type => WebhooksAvgAggregate, {
    nullable: true
  })
  _avg!: WebhooksAvgAggregate | null;

  @TypeGraphQL.Field(_type => WebhooksSumAggregate, {
    nullable: true
  })
  _sum!: WebhooksSumAggregate | null;

  @TypeGraphQL.Field(_type => WebhooksMinAggregate, {
    nullable: true
  })
  _min!: WebhooksMinAggregate | null;

  @TypeGraphQL.Field(_type => WebhooksMaxAggregate, {
    nullable: true
  })
  _max!: WebhooksMaxAggregate | null;
}
