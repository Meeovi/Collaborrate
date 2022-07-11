import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateAvgAggregate } from "../outputs/Tax_rateAvgAggregate";
import { Tax_rateCountAggregate } from "../outputs/Tax_rateCountAggregate";
import { Tax_rateMaxAggregate } from "../outputs/Tax_rateMaxAggregate";
import { Tax_rateMinAggregate } from "../outputs/Tax_rateMinAggregate";
import { Tax_rateSumAggregate } from "../outputs/Tax_rateSumAggregate";

@TypeGraphQL.ObjectType("Tax_rateGroupBy", {
  isAbstract: true
})
export class Tax_rateGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tax_identifier!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  zip_post_is_range!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postcode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rate_percent!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_store_view!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  @TypeGraphQL.Field(_type => Tax_rateCountAggregate, {
    nullable: true
  })
  _count!: Tax_rateCountAggregate | null;

  @TypeGraphQL.Field(_type => Tax_rateAvgAggregate, {
    nullable: true
  })
  _avg!: Tax_rateAvgAggregate | null;

  @TypeGraphQL.Field(_type => Tax_rateSumAggregate, {
    nullable: true
  })
  _sum!: Tax_rateSumAggregate | null;

  @TypeGraphQL.Field(_type => Tax_rateMinAggregate, {
    nullable: true
  })
  _min!: Tax_rateMinAggregate | null;

  @TypeGraphQL.Field(_type => Tax_rateMaxAggregate, {
    nullable: true
  })
  _max!: Tax_rateMaxAggregate | null;
}
