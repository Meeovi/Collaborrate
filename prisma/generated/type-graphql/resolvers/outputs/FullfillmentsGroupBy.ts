import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FullfillmentsAvgAggregate } from "../outputs/FullfillmentsAvgAggregate";
import { FullfillmentsCountAggregate } from "../outputs/FullfillmentsCountAggregate";
import { FullfillmentsMaxAggregate } from "../outputs/FullfillmentsMaxAggregate";
import { FullfillmentsMinAggregate } from "../outputs/FullfillmentsMinAggregate";
import { FullfillmentsSumAggregate } from "../outputs/FullfillmentsSumAggregate";

@TypeGraphQL.ObjectType("FullfillmentsGroupBy", {
  isAbstract: true
})
export class FullfillmentsGroupBy {
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
  shipping_zones!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address_two!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipcode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country_area!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pickup!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stock!: string | null;

  @TypeGraphQL.Field(_type => FullfillmentsCountAggregate, {
    nullable: true
  })
  _count!: FullfillmentsCountAggregate | null;

  @TypeGraphQL.Field(_type => FullfillmentsAvgAggregate, {
    nullable: true
  })
  _avg!: FullfillmentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => FullfillmentsSumAggregate, {
    nullable: true
  })
  _sum!: FullfillmentsSumAggregate | null;

  @TypeGraphQL.Field(_type => FullfillmentsMinAggregate, {
    nullable: true
  })
  _min!: FullfillmentsMinAggregate | null;

  @TypeGraphQL.Field(_type => FullfillmentsMaxAggregate, {
    nullable: true
  })
  _max!: FullfillmentsMaxAggregate | null;
}
