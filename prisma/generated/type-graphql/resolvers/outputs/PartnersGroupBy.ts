import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnersAvgAggregate } from "../outputs/PartnersAvgAggregate";
import { PartnersCountAggregate } from "../outputs/PartnersCountAggregate";
import { PartnersMaxAggregate } from "../outputs/PartnersMaxAggregate";
import { PartnersMinAggregate } from "../outputs/PartnersMinAggregate";
import { PartnersSumAggregate } from "../outputs/PartnersSumAggregate";

@TypeGraphQL.ObjectType("PartnersGroupBy", {
  isAbstract: true
})
export class PartnersGroupBy {
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
  address!: string | null;

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
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  business_type!: string | null;

  @TypeGraphQL.Field(_type => PartnersCountAggregate, {
    nullable: true
  })
  _count!: PartnersCountAggregate | null;

  @TypeGraphQL.Field(_type => PartnersAvgAggregate, {
    nullable: true
  })
  _avg!: PartnersAvgAggregate | null;

  @TypeGraphQL.Field(_type => PartnersSumAggregate, {
    nullable: true
  })
  _sum!: PartnersSumAggregate | null;

  @TypeGraphQL.Field(_type => PartnersMinAggregate, {
    nullable: true
  })
  _min!: PartnersMinAggregate | null;

  @TypeGraphQL.Field(_type => PartnersMaxAggregate, {
    nullable: true
  })
  _max!: PartnersMaxAggregate | null;
}
