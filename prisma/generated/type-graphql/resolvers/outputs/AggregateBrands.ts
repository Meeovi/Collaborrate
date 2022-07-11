import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsAvgAggregate } from "../outputs/BrandsAvgAggregate";
import { BrandsCountAggregate } from "../outputs/BrandsCountAggregate";
import { BrandsMaxAggregate } from "../outputs/BrandsMaxAggregate";
import { BrandsMinAggregate } from "../outputs/BrandsMinAggregate";
import { BrandsSumAggregate } from "../outputs/BrandsSumAggregate";

@TypeGraphQL.ObjectType("AggregateBrands", {
  isAbstract: true
})
export class AggregateBrands {
  @TypeGraphQL.Field(_type => BrandsCountAggregate, {
    nullable: true
  })
  _count!: BrandsCountAggregate | null;

  @TypeGraphQL.Field(_type => BrandsAvgAggregate, {
    nullable: true
  })
  _avg!: BrandsAvgAggregate | null;

  @TypeGraphQL.Field(_type => BrandsSumAggregate, {
    nullable: true
  })
  _sum!: BrandsSumAggregate | null;

  @TypeGraphQL.Field(_type => BrandsMinAggregate, {
    nullable: true
  })
  _min!: BrandsMinAggregate | null;

  @TypeGraphQL.Field(_type => BrandsMaxAggregate, {
    nullable: true
  })
  _max!: BrandsMaxAggregate | null;
}
