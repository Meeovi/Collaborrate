import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OpportunitiesAvgAggregate } from "../outputs/OpportunitiesAvgAggregate";
import { OpportunitiesCountAggregate } from "../outputs/OpportunitiesCountAggregate";
import { OpportunitiesMaxAggregate } from "../outputs/OpportunitiesMaxAggregate";
import { OpportunitiesMinAggregate } from "../outputs/OpportunitiesMinAggregate";
import { OpportunitiesSumAggregate } from "../outputs/OpportunitiesSumAggregate";

@TypeGraphQL.ObjectType("AggregateOpportunities", {
  isAbstract: true
})
export class AggregateOpportunities {
  @TypeGraphQL.Field(_type => OpportunitiesCountAggregate, {
    nullable: true
  })
  _count!: OpportunitiesCountAggregate | null;

  @TypeGraphQL.Field(_type => OpportunitiesAvgAggregate, {
    nullable: true
  })
  _avg!: OpportunitiesAvgAggregate | null;

  @TypeGraphQL.Field(_type => OpportunitiesSumAggregate, {
    nullable: true
  })
  _sum!: OpportunitiesSumAggregate | null;

  @TypeGraphQL.Field(_type => OpportunitiesMinAggregate, {
    nullable: true
  })
  _min!: OpportunitiesMinAggregate | null;

  @TypeGraphQL.Field(_type => OpportunitiesMaxAggregate, {
    nullable: true
  })
  _max!: OpportunitiesMaxAggregate | null;
}
