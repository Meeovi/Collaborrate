import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LeadsAvgAggregate } from "../outputs/LeadsAvgAggregate";
import { LeadsCountAggregate } from "../outputs/LeadsCountAggregate";
import { LeadsMaxAggregate } from "../outputs/LeadsMaxAggregate";
import { LeadsMinAggregate } from "../outputs/LeadsMinAggregate";
import { LeadsSumAggregate } from "../outputs/LeadsSumAggregate";

@TypeGraphQL.ObjectType("AggregateLeads", {
  isAbstract: true
})
export class AggregateLeads {
  @TypeGraphQL.Field(_type => LeadsCountAggregate, {
    nullable: true
  })
  _count!: LeadsCountAggregate | null;

  @TypeGraphQL.Field(_type => LeadsAvgAggregate, {
    nullable: true
  })
  _avg!: LeadsAvgAggregate | null;

  @TypeGraphQL.Field(_type => LeadsSumAggregate, {
    nullable: true
  })
  _sum!: LeadsSumAggregate | null;

  @TypeGraphQL.Field(_type => LeadsMinAggregate, {
    nullable: true
  })
  _min!: LeadsMinAggregate | null;

  @TypeGraphQL.Field(_type => LeadsMaxAggregate, {
    nullable: true
  })
  _max!: LeadsMaxAggregate | null;
}
