import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsAvgAggregate } from "../outputs/ProductsAvgAggregate";
import { ProductsCountAggregate } from "../outputs/ProductsCountAggregate";
import { ProductsMaxAggregate } from "../outputs/ProductsMaxAggregate";
import { ProductsMinAggregate } from "../outputs/ProductsMinAggregate";
import { ProductsSumAggregate } from "../outputs/ProductsSumAggregate";

@TypeGraphQL.ObjectType("AggregateProducts", {
  isAbstract: true
})
export class AggregateProducts {
  @TypeGraphQL.Field(_type => ProductsCountAggregate, {
    nullable: true
  })
  _count!: ProductsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductsAvgAggregate, {
    nullable: true
  })
  _avg!: ProductsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProductsSumAggregate, {
    nullable: true
  })
  _sum!: ProductsSumAggregate | null;

  @TypeGraphQL.Field(_type => ProductsMinAggregate, {
    nullable: true
  })
  _min!: ProductsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductsMaxAggregate, {
    nullable: true
  })
  _max!: ProductsMaxAggregate | null;
}
