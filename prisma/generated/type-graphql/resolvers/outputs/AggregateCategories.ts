import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesAvgAggregate } from "../outputs/CategoriesAvgAggregate";
import { CategoriesCountAggregate } from "../outputs/CategoriesCountAggregate";
import { CategoriesMaxAggregate } from "../outputs/CategoriesMaxAggregate";
import { CategoriesMinAggregate } from "../outputs/CategoriesMinAggregate";
import { CategoriesSumAggregate } from "../outputs/CategoriesSumAggregate";

@TypeGraphQL.ObjectType("AggregateCategories", {
  isAbstract: true
})
export class AggregateCategories {
  @TypeGraphQL.Field(_type => CategoriesCountAggregate, {
    nullable: true
  })
  _count!: CategoriesCountAggregate | null;

  @TypeGraphQL.Field(_type => CategoriesAvgAggregate, {
    nullable: true
  })
  _avg!: CategoriesAvgAggregate | null;

  @TypeGraphQL.Field(_type => CategoriesSumAggregate, {
    nullable: true
  })
  _sum!: CategoriesSumAggregate | null;

  @TypeGraphQL.Field(_type => CategoriesMinAggregate, {
    nullable: true
  })
  _min!: CategoriesMinAggregate | null;

  @TypeGraphQL.Field(_type => CategoriesMaxAggregate, {
    nullable: true
  })
  _max!: CategoriesMaxAggregate | null;
}
