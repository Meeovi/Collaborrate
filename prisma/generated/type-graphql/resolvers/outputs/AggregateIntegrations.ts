import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationsAvgAggregate } from "../outputs/IntegrationsAvgAggregate";
import { IntegrationsCountAggregate } from "../outputs/IntegrationsCountAggregate";
import { IntegrationsMaxAggregate } from "../outputs/IntegrationsMaxAggregate";
import { IntegrationsMinAggregate } from "../outputs/IntegrationsMinAggregate";
import { IntegrationsSumAggregate } from "../outputs/IntegrationsSumAggregate";

@TypeGraphQL.ObjectType("AggregateIntegrations", {
  isAbstract: true
})
export class AggregateIntegrations {
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
