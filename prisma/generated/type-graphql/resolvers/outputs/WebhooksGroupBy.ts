import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebhooksAvgAggregate } from "../outputs/WebhooksAvgAggregate";
import { WebhooksCountAggregate } from "../outputs/WebhooksCountAggregate";
import { WebhooksMaxAggregate } from "../outputs/WebhooksMaxAggregate";
import { WebhooksMinAggregate } from "../outputs/WebhooksMinAggregate";
import { WebhooksSumAggregate } from "../outputs/WebhooksSumAggregate";

@TypeGraphQL.ObjectType("WebhooksGroupBy", {
  isAbstract: true
})
export class WebhooksGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  headers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  create!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  retrieve!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  update!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  delete!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publish!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unpublish!: string | null;

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
