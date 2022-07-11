import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersAvgAggregate } from "../outputs/OrdersAvgAggregate";
import { OrdersCountAggregate } from "../outputs/OrdersCountAggregate";
import { OrdersMaxAggregate } from "../outputs/OrdersMaxAggregate";
import { OrdersMinAggregate } from "../outputs/OrdersMinAggregate";
import { OrdersSumAggregate } from "../outputs/OrdersSumAggregate";

@TypeGraphQL.ObjectType("AggregateOrders", {
  isAbstract: true
})
export class AggregateOrders {
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
