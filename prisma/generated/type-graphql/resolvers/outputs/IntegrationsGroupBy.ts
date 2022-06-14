import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationsAvgAggregate } from "../outputs/IntegrationsAvgAggregate";
import { IntegrationsCountAggregate } from "../outputs/IntegrationsCountAggregate";
import { IntegrationsMaxAggregate } from "../outputs/IntegrationsMaxAggregate";
import { IntegrationsMinAggregate } from "../outputs/IntegrationsMinAggregate";
import { IntegrationsSumAggregate } from "../outputs/IntegrationsSumAggregate";

@TypeGraphQL.ObjectType("IntegrationsGroupBy", {
  isAbstract: true
})
export class IntegrationsGroupBy {
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
  media!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category!: string | null;

  @TypeGraphQL.Field(_type => IntegrationsCountAggregate, {
    nullable: true
  })
  _count!: IntegrationsCountAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationsAvgAggregate, {
    nullable: true
  })
  _avg!: IntegrationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationsSumAggregate, {
    nullable: true
  })
  _sum!: IntegrationsSumAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationsMinAggregate, {
    nullable: true
  })
  _min!: IntegrationsMinAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationsMaxAggregate, {
    nullable: true
  })
  _max!: IntegrationsMaxAggregate | null;
}
