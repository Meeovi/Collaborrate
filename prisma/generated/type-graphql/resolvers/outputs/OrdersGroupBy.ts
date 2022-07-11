import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersAvgAggregate } from "../outputs/OrdersAvgAggregate";
import { OrdersCountAggregate } from "../outputs/OrdersCountAggregate";
import { OrdersMaxAggregate } from "../outputs/OrdersMaxAggregate";
import { OrdersMinAggregate } from "../outputs/OrdersMinAggregate";
import { OrdersSumAggregate } from "../outputs/OrdersSumAggregate";

@TypeGraphQL.ObjectType("OrdersGroupBy", {
  isAbstract: true
})
export class OrdersGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  purchase_point!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  purchase_date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bill_to_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ship_to_name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  grand_total_base!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  grand_total_purchased!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  action!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allocated_sources!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  braintree_transaction_source!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  @TypeGraphQL.Field(_type => OrdersCountAggregate, {
    nullable: true
  })
  _count!: OrdersCountAggregate | null;

  @TypeGraphQL.Field(_type => OrdersAvgAggregate, {
    nullable: true
  })
  _avg!: OrdersAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrdersSumAggregate, {
    nullable: true
  })
  _sum!: OrdersSumAggregate | null;

  @TypeGraphQL.Field(_type => OrdersMinAggregate, {
    nullable: true
  })
  _min!: OrdersMinAggregate | null;

  @TypeGraphQL.Field(_type => OrdersMaxAggregate, {
    nullable: true
  })
  _max!: OrdersMaxAggregate | null;
}
