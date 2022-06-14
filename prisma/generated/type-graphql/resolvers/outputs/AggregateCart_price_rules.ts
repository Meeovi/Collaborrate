import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cart_price_rulesAvgAggregate } from "../outputs/Cart_price_rulesAvgAggregate";
import { Cart_price_rulesCountAggregate } from "../outputs/Cart_price_rulesCountAggregate";
import { Cart_price_rulesMaxAggregate } from "../outputs/Cart_price_rulesMaxAggregate";
import { Cart_price_rulesMinAggregate } from "../outputs/Cart_price_rulesMinAggregate";
import { Cart_price_rulesSumAggregate } from "../outputs/Cart_price_rulesSumAggregate";

@TypeGraphQL.ObjectType("AggregateCart_price_rules", {
  isAbstract: true
})
export class AggregateCart_price_rules {
  @TypeGraphQL.Field(_type => Cart_price_rulesCountAggregate, {
    nullable: true
  })
  _count!: Cart_price_rulesCountAggregate | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesAvgAggregate, {
    nullable: true
  })
  _avg!: Cart_price_rulesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesSumAggregate, {
    nullable: true
  })
  _sum!: Cart_price_rulesSumAggregate | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesMinAggregate, {
    nullable: true
  })
  _min!: Cart_price_rulesMinAggregate | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesMaxAggregate, {
    nullable: true
  })
  _max!: Cart_price_rulesMaxAggregate | null;
}
