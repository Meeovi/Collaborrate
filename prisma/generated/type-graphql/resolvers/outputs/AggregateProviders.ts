import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProvidersAvgAggregate } from "../outputs/ProvidersAvgAggregate";
import { ProvidersCountAggregate } from "../outputs/ProvidersCountAggregate";
import { ProvidersMaxAggregate } from "../outputs/ProvidersMaxAggregate";
import { ProvidersMinAggregate } from "../outputs/ProvidersMinAggregate";
import { ProvidersSumAggregate } from "../outputs/ProvidersSumAggregate";

@TypeGraphQL.ObjectType("AggregateProviders", {
  isAbstract: true
})
export class AggregateProviders {
  @TypeGraphQL.Field(_type => ProvidersCountAggregate, {
    nullable: true
  })
  _count!: ProvidersCountAggregate | null;

  @TypeGraphQL.Field(_type => ProvidersAvgAggregate, {
    nullable: true
  })
  _avg!: ProvidersAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProvidersSumAggregate, {
    nullable: true
  })
  _sum!: ProvidersSumAggregate | null;

  @TypeGraphQL.Field(_type => ProvidersMinAggregate, {
    nullable: true
  })
  _min!: ProvidersMinAggregate | null;

  @TypeGraphQL.Field(_type => ProvidersMaxAggregate, {
    nullable: true
  })
  _max!: ProvidersMaxAggregate | null;
}
