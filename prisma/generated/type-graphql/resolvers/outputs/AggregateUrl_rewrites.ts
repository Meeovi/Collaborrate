import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Url_rewritesAvgAggregate } from "../outputs/Url_rewritesAvgAggregate";
import { Url_rewritesCountAggregate } from "../outputs/Url_rewritesCountAggregate";
import { Url_rewritesMaxAggregate } from "../outputs/Url_rewritesMaxAggregate";
import { Url_rewritesMinAggregate } from "../outputs/Url_rewritesMinAggregate";
import { Url_rewritesSumAggregate } from "../outputs/Url_rewritesSumAggregate";

@TypeGraphQL.ObjectType("AggregateUrl_rewrites", {
  isAbstract: true
})
export class AggregateUrl_rewrites {
  @TypeGraphQL.Field(_type => Url_rewritesCountAggregate, {
    nullable: true
  })
  _count!: Url_rewritesCountAggregate | null;

  @TypeGraphQL.Field(_type => Url_rewritesAvgAggregate, {
    nullable: true
  })
  _avg!: Url_rewritesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Url_rewritesSumAggregate, {
    nullable: true
  })
  _sum!: Url_rewritesSumAggregate | null;

  @TypeGraphQL.Field(_type => Url_rewritesMinAggregate, {
    nullable: true
  })
  _min!: Url_rewritesMinAggregate | null;

  @TypeGraphQL.Field(_type => Url_rewritesMaxAggregate, {
    nullable: true
  })
  _max!: Url_rewritesMaxAggregate | null;
}
