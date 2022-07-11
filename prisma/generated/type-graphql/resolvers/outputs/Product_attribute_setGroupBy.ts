import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setAvgAggregate } from "../outputs/Product_attribute_setAvgAggregate";
import { Product_attribute_setCountAggregate } from "../outputs/Product_attribute_setCountAggregate";
import { Product_attribute_setMaxAggregate } from "../outputs/Product_attribute_setMaxAggregate";
import { Product_attribute_setMinAggregate } from "../outputs/Product_attribute_setMinAggregate";
import { Product_attribute_setSumAggregate } from "../outputs/Product_attribute_setSumAggregate";

@TypeGraphQL.ObjectType("Product_attribute_setGroupBy", {
  isAbstract: true
})
export class Product_attribute_setGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  based_on!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  attribute_id!: number;

  @TypeGraphQL.Field(_type => Product_attribute_setCountAggregate, {
    nullable: true
  })
  _count!: Product_attribute_setCountAggregate | null;

  @TypeGraphQL.Field(_type => Product_attribute_setAvgAggregate, {
    nullable: true
  })
  _avg!: Product_attribute_setAvgAggregate | null;

  @TypeGraphQL.Field(_type => Product_attribute_setSumAggregate, {
    nullable: true
  })
  _sum!: Product_attribute_setSumAggregate | null;

  @TypeGraphQL.Field(_type => Product_attribute_setMinAggregate, {
    nullable: true
  })
  _min!: Product_attribute_setMinAggregate | null;

  @TypeGraphQL.Field(_type => Product_attribute_setMaxAggregate, {
    nullable: true
  })
  _max!: Product_attribute_setMaxAggregate | null;
}
