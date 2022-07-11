import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentAvgAggregate } from "../outputs/Customer_paymentAvgAggregate";
import { Customer_paymentCountAggregate } from "../outputs/Customer_paymentCountAggregate";
import { Customer_paymentMaxAggregate } from "../outputs/Customer_paymentMaxAggregate";
import { Customer_paymentMinAggregate } from "../outputs/Customer_paymentMinAggregate";
import { Customer_paymentSumAggregate } from "../outputs/Customer_paymentSumAggregate";

@TypeGraphQL.ObjectType("AggregateCustomer_payment", {
  isAbstract: true
})
export class AggregateCustomer_payment {
  @TypeGraphQL.Field(_type => Customer_paymentCountAggregate, {
    nullable: true
  })
  _count!: Customer_paymentCountAggregate | null;

  @TypeGraphQL.Field(_type => Customer_paymentAvgAggregate, {
    nullable: true
  })
  _avg!: Customer_paymentAvgAggregate | null;

  @TypeGraphQL.Field(_type => Customer_paymentSumAggregate, {
    nullable: true
  })
  _sum!: Customer_paymentSumAggregate | null;

  @TypeGraphQL.Field(_type => Customer_paymentMinAggregate, {
    nullable: true
  })
  _min!: Customer_paymentMinAggregate | null;

  @TypeGraphQL.Field(_type => Customer_paymentMaxAggregate, {
    nullable: true
  })
  _max!: Customer_paymentMaxAggregate | null;
}
