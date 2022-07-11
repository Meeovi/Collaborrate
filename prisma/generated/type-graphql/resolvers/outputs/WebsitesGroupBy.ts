import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsitesAvgAggregate } from "../outputs/WebsitesAvgAggregate";
import { WebsitesCountAggregate } from "../outputs/WebsitesCountAggregate";
import { WebsitesMaxAggregate } from "../outputs/WebsitesMaxAggregate";
import { WebsitesMinAggregate } from "../outputs/WebsitesMinAggregate";
import { WebsitesSumAggregate } from "../outputs/WebsitesSumAggregate";

@TypeGraphQL.ObjectType("WebsitesGroupBy", {
  isAbstract: true
})
export class WebsitesGroupBy {
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
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shop!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store!: string | null;

  @TypeGraphQL.Field(_type => WebsitesCountAggregate, {
    nullable: true
  })
  _count!: WebsitesCountAggregate | null;

  @TypeGraphQL.Field(_type => WebsitesAvgAggregate, {
    nullable: true
  })
  _avg!: WebsitesAvgAggregate | null;

  @TypeGraphQL.Field(_type => WebsitesSumAggregate, {
    nullable: true
  })
  _sum!: WebsitesSumAggregate | null;

  @TypeGraphQL.Field(_type => WebsitesMinAggregate, {
    nullable: true
  })
  _min!: WebsitesMinAggregate | null;

  @TypeGraphQL.Field(_type => WebsitesMaxAggregate, {
    nullable: true
  })
  _max!: WebsitesMaxAggregate | null;
}
