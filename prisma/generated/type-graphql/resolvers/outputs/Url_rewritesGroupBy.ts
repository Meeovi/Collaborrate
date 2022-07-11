import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Url_rewritesAvgAggregate } from "../outputs/Url_rewritesAvgAggregate";
import { Url_rewritesCountAggregate } from "../outputs/Url_rewritesCountAggregate";
import { Url_rewritesMaxAggregate } from "../outputs/Url_rewritesMaxAggregate";
import { Url_rewritesMinAggregate } from "../outputs/Url_rewritesMinAggregate";
import { Url_rewritesSumAggregate } from "../outputs/Url_rewritesSumAggregate";

@TypeGraphQL.ObjectType("Url_rewritesGroupBy", {
  isAbstract: true
})
export class Url_rewritesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  request_path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  redirect_type!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store!: string | null;

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
