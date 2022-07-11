import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentAvgAggregate } from "../outputs/Customer_paymentAvgAggregate";
import { Customer_paymentCountAggregate } from "../outputs/Customer_paymentCountAggregate";
import { Customer_paymentMaxAggregate } from "../outputs/Customer_paymentMaxAggregate";
import { Customer_paymentMinAggregate } from "../outputs/Customer_paymentMinAggregate";
import { Customer_paymentSumAggregate } from "../outputs/Customer_paymentSumAggregate";

@TypeGraphQL.ObjectType("Customer_paymentGroupBy", {
  isAbstract: true
})
export class Customer_paymentGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_info!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  account_no!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  expiry!: bigint | null;

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
