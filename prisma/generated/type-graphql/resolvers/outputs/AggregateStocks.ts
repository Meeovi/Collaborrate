import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StocksAvgAggregate } from "../outputs/StocksAvgAggregate";
import { StocksCountAggregate } from "../outputs/StocksCountAggregate";
import { StocksMaxAggregate } from "../outputs/StocksMaxAggregate";
import { StocksMinAggregate } from "../outputs/StocksMinAggregate";
import { StocksSumAggregate } from "../outputs/StocksSumAggregate";

@TypeGraphQL.ObjectType("AggregateStocks", {
  isAbstract: true
})
export class AggregateStocks {
  @TypeGraphQL.Field(_type => StocksCountAggregate, {
    nullable: true
  })
  _count!: StocksCountAggregate | null;

  @TypeGraphQL.Field(_type => StocksAvgAggregate, {
    nullable: true
  })
  _avg!: StocksAvgAggregate | null;

  @TypeGraphQL.Field(_type => StocksSumAggregate, {
    nullable: true
  })
  _sum!: StocksSumAggregate | null;

  @TypeGraphQL.Field(_type => StocksMinAggregate, {
    nullable: true
  })
  _min!: StocksMinAggregate | null;

  @TypeGraphQL.Field(_type => StocksMaxAggregate, {
    nullable: true
  })
  _max!: StocksMaxAggregate | null;
}
