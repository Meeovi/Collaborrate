import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnersAvgAggregate } from "../outputs/PartnersAvgAggregate";
import { PartnersCountAggregate } from "../outputs/PartnersCountAggregate";
import { PartnersMaxAggregate } from "../outputs/PartnersMaxAggregate";
import { PartnersMinAggregate } from "../outputs/PartnersMinAggregate";
import { PartnersSumAggregate } from "../outputs/PartnersSumAggregate";

@TypeGraphQL.ObjectType("AggregatePartners", {
  isAbstract: true
})
export class AggregatePartners {
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
