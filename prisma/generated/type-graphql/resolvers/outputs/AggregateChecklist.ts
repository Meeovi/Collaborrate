import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistAvgAggregate } from "../outputs/ChecklistAvgAggregate";
import { ChecklistCountAggregate } from "../outputs/ChecklistCountAggregate";
import { ChecklistMaxAggregate } from "../outputs/ChecklistMaxAggregate";
import { ChecklistMinAggregate } from "../outputs/ChecklistMinAggregate";
import { ChecklistSumAggregate } from "../outputs/ChecklistSumAggregate";

@TypeGraphQL.ObjectType("AggregateChecklist", {
  isAbstract: true
})
export class AggregateChecklist {
  @TypeGraphQL.Field(_type => ChecklistCountAggregate, {
    nullable: true
  })
  _count!: ChecklistCountAggregate | null;

  @TypeGraphQL.Field(_type => ChecklistAvgAggregate, {
    nullable: true
  })
  _avg!: ChecklistAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChecklistSumAggregate, {
    nullable: true
  })
  _sum!: ChecklistSumAggregate | null;

  @TypeGraphQL.Field(_type => ChecklistMinAggregate, {
    nullable: true
  })
  _min!: ChecklistMinAggregate | null;

  @TypeGraphQL.Field(_type => ChecklistMaxAggregate, {
    nullable: true
  })
  _max!: ChecklistMaxAggregate | null;
}
