import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasesAvgAggregate } from "../outputs/CasesAvgAggregate";
import { CasesCountAggregate } from "../outputs/CasesCountAggregate";
import { CasesMaxAggregate } from "../outputs/CasesMaxAggregate";
import { CasesMinAggregate } from "../outputs/CasesMinAggregate";
import { CasesSumAggregate } from "../outputs/CasesSumAggregate";

@TypeGraphQL.ObjectType("AggregateCases", {
  isAbstract: true
})
export class AggregateCases {
  @TypeGraphQL.Field(_type => CasesCountAggregate, {
    nullable: true
  })
  _count!: CasesCountAggregate | null;

  @TypeGraphQL.Field(_type => CasesAvgAggregate, {
    nullable: true
  })
  _avg!: CasesAvgAggregate | null;

  @TypeGraphQL.Field(_type => CasesSumAggregate, {
    nullable: true
  })
  _sum!: CasesSumAggregate | null;

  @TypeGraphQL.Field(_type => CasesMinAggregate, {
    nullable: true
  })
  _min!: CasesMinAggregate | null;

  @TypeGraphQL.Field(_type => CasesMaxAggregate, {
    nullable: true
  })
  _max!: CasesMaxAggregate | null;
}
