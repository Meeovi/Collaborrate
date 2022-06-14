import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeAvgAggregate } from "../outputs/Product_attributeAvgAggregate";
import { Product_attributeCountAggregate } from "../outputs/Product_attributeCountAggregate";
import { Product_attributeMaxAggregate } from "../outputs/Product_attributeMaxAggregate";
import { Product_attributeMinAggregate } from "../outputs/Product_attributeMinAggregate";
import { Product_attributeSumAggregate } from "../outputs/Product_attributeSumAggregate";

@TypeGraphQL.ObjectType("AggregateProduct_attribute", {
  isAbstract: true
})
export class AggregateProduct_attribute {
  @TypeGraphQL.Field(_type => Product_attributeCountAggregate, {
    nullable: true
  })
  _count!: Product_attributeCountAggregate | null;

  @TypeGraphQL.Field(_type => Product_attributeAvgAggregate, {
    nullable: true
  })
  _avg!: Product_attributeAvgAggregate | null;

  @TypeGraphQL.Field(_type => Product_attributeSumAggregate, {
    nullable: true
  })
  _sum!: Product_attributeSumAggregate | null;

  @TypeGraphQL.Field(_type => Product_attributeMinAggregate, {
    nullable: true
  })
  _min!: Product_attributeMinAggregate | null;

  @TypeGraphQL.Field(_type => Product_attributeMaxAggregate, {
    nullable: true
  })
  _max!: Product_attributeMaxAggregate | null;
}
