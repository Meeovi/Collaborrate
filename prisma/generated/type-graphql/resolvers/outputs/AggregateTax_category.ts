import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_categoryAvgAggregate } from "../outputs/Tax_categoryAvgAggregate";
import { Tax_categoryCountAggregate } from "../outputs/Tax_categoryCountAggregate";
import { Tax_categoryMaxAggregate } from "../outputs/Tax_categoryMaxAggregate";
import { Tax_categoryMinAggregate } from "../outputs/Tax_categoryMinAggregate";
import { Tax_categorySumAggregate } from "../outputs/Tax_categorySumAggregate";

@TypeGraphQL.ObjectType("AggregateTax_category", {
  isAbstract: true
})
export class AggregateTax_category {
  @TypeGraphQL.Field(_type => Tax_categoryCountAggregate, {
    nullable: true
  })
  _count!: Tax_categoryCountAggregate | null;

  @TypeGraphQL.Field(_type => Tax_categoryAvgAggregate, {
    nullable: true
  })
  _avg!: Tax_categoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => Tax_categorySumAggregate, {
    nullable: true
  })
  _sum!: Tax_categorySumAggregate | null;

  @TypeGraphQL.Field(_type => Tax_categoryMinAggregate, {
    nullable: true
  })
  _min!: Tax_categoryMinAggregate | null;

  @TypeGraphQL.Field(_type => Tax_categoryMaxAggregate, {
    nullable: true
  })
  _max!: Tax_categoryMaxAggregate | null;
}
