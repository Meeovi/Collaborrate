import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisitsAvgAggregate } from "../outputs/VisitsAvgAggregate";
import { VisitsCountAggregate } from "../outputs/VisitsCountAggregate";
import { VisitsMaxAggregate } from "../outputs/VisitsMaxAggregate";
import { VisitsMinAggregate } from "../outputs/VisitsMinAggregate";
import { VisitsSumAggregate } from "../outputs/VisitsSumAggregate";

@TypeGraphQL.ObjectType("AggregateVisits", {
  isAbstract: true
})
export class AggregateVisits {
  @TypeGraphQL.Field(_type => VisitsCountAggregate, {
    nullable: true
  })
  _count!: VisitsCountAggregate | null;

  @TypeGraphQL.Field(_type => VisitsAvgAggregate, {
    nullable: true
  })
  _avg!: VisitsAvgAggregate | null;

  @TypeGraphQL.Field(_type => VisitsSumAggregate, {
    nullable: true
  })
  _sum!: VisitsSumAggregate | null;

  @TypeGraphQL.Field(_type => VisitsMinAggregate, {
    nullable: true
  })
  _min!: VisitsMinAggregate | null;

  @TypeGraphQL.Field(_type => VisitsMaxAggregate, {
    nullable: true
  })
  _max!: VisitsMaxAggregate | null;
}
