import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupAvgAggregate } from "../outputs/Customer_groupAvgAggregate";
import { Customer_groupCountAggregate } from "../outputs/Customer_groupCountAggregate";
import { Customer_groupMaxAggregate } from "../outputs/Customer_groupMaxAggregate";
import { Customer_groupMinAggregate } from "../outputs/Customer_groupMinAggregate";
import { Customer_groupSumAggregate } from "../outputs/Customer_groupSumAggregate";

@TypeGraphQL.ObjectType("AggregateCustomer_group", {
  isAbstract: true
})
export class AggregateCustomer_group {
  @TypeGraphQL.Field(_type => Customer_groupCountAggregate, {
    nullable: true
  })
  _count!: Customer_groupCountAggregate | null;

  @TypeGraphQL.Field(_type => Customer_groupAvgAggregate, {
    nullable: true
  })
  _avg!: Customer_groupAvgAggregate | null;

  @TypeGraphQL.Field(_type => Customer_groupSumAggregate, {
    nullable: true
  })
  _sum!: Customer_groupSumAggregate | null;

  @TypeGraphQL.Field(_type => Customer_groupMinAggregate, {
    nullable: true
  })
  _min!: Customer_groupMinAggregate | null;

  @TypeGraphQL.Field(_type => Customer_groupMaxAggregate, {
    nullable: true
  })
  _max!: Customer_groupMaxAggregate | null;
}
