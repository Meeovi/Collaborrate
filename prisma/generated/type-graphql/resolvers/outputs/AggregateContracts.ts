import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContractsAvgAggregate } from "../outputs/ContractsAvgAggregate";
import { ContractsCountAggregate } from "../outputs/ContractsCountAggregate";
import { ContractsMaxAggregate } from "../outputs/ContractsMaxAggregate";
import { ContractsMinAggregate } from "../outputs/ContractsMinAggregate";
import { ContractsSumAggregate } from "../outputs/ContractsSumAggregate";

@TypeGraphQL.ObjectType("AggregateContracts", {
  isAbstract: true
})
export class AggregateContracts {
  @TypeGraphQL.Field(_type => ContractsCountAggregate, {
    nullable: true
  })
  _count!: ContractsCountAggregate | null;

  @TypeGraphQL.Field(_type => ContractsAvgAggregate, {
    nullable: true
  })
  _avg!: ContractsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContractsSumAggregate, {
    nullable: true
  })
  _sum!: ContractsSumAggregate | null;

  @TypeGraphQL.Field(_type => ContractsMinAggregate, {
    nullable: true
  })
  _min!: ContractsMinAggregate | null;

  @TypeGraphQL.Field(_type => ContractsMaxAggregate, {
    nullable: true
  })
  _max!: ContractsMaxAggregate | null;
}
