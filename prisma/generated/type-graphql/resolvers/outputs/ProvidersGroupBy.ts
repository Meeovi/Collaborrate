import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProvidersAvgAggregate } from "../outputs/ProvidersAvgAggregate";
import { ProvidersCountAggregate } from "../outputs/ProvidersCountAggregate";
import { ProvidersMaxAggregate } from "../outputs/ProvidersMaxAggregate";
import { ProvidersMinAggregate } from "../outputs/ProvidersMinAggregate";
import { ProvidersSumAggregate } from "../outputs/ProvidersSumAggregate";

@TypeGraphQL.ObjectType("ProvidersGroupBy", {
  isAbstract: true
})
export class ProvidersGroupBy {
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
  client_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  host_uri!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  redirect_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  redirect_url_app!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  active!: string | null;

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
