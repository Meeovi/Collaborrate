import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesAvgAggregate } from "../outputs/Product_typesAvgAggregate";
import { Product_typesCountAggregate } from "../outputs/Product_typesCountAggregate";
import { Product_typesMaxAggregate } from "../outputs/Product_typesMaxAggregate";
import { Product_typesMinAggregate } from "../outputs/Product_typesMinAggregate";
import { Product_typesSumAggregate } from "../outputs/Product_typesSumAggregate";

@TypeGraphQL.ObjectType("AggregateProduct_types", {
  isAbstract: true
})
export class AggregateProduct_types {
  @TypeGraphQL.Field(_type => Product_typesCountAggregate, {
    nullable: true
  })
  _count!: Product_typesCountAggregate | null;

  @TypeGraphQL.Field(_type => Product_typesAvgAggregate, {
    nullable: true
  })
  _avg!: Product_typesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Product_typesSumAggregate, {
    nullable: true
  })
  _sum!: Product_typesSumAggregate | null;

  @TypeGraphQL.Field(_type => Product_typesMinAggregate, {
    nullable: true
  })
  _min!: Product_typesMinAggregate | null;

  @TypeGraphQL.Field(_type => Product_typesMaxAggregate, {
    nullable: true
  })
  _max!: Product_typesMaxAggregate | null;
}
