import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShopsAvgAggregate } from "../outputs/ShopsAvgAggregate";
import { ShopsCountAggregate } from "../outputs/ShopsCountAggregate";
import { ShopsMaxAggregate } from "../outputs/ShopsMaxAggregate";
import { ShopsMinAggregate } from "../outputs/ShopsMinAggregate";
import { ShopsSumAggregate } from "../outputs/ShopsSumAggregate";

@TypeGraphQL.ObjectType("AggregateShops", {
  isAbstract: true
})
export class AggregateShops {
  @TypeGraphQL.Field(_type => ShopsCountAggregate, {
    nullable: true
  })
  _count!: ShopsCountAggregate | null;

  @TypeGraphQL.Field(_type => ShopsAvgAggregate, {
    nullable: true
  })
  _avg!: ShopsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShopsSumAggregate, {
    nullable: true
  })
  _sum!: ShopsSumAggregate | null;

  @TypeGraphQL.Field(_type => ShopsMinAggregate, {
    nullable: true
  })
  _min!: ShopsMinAggregate | null;

  @TypeGraphQL.Field(_type => ShopsMaxAggregate, {
    nullable: true
  })
  _max!: ShopsMaxAggregate | null;
}
