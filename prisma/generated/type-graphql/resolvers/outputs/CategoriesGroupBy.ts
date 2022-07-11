import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesAvgAggregate } from "../outputs/CategoriesAvgAggregate";
import { CategoriesCountAggregate } from "../outputs/CategoriesCountAggregate";
import { CategoriesMaxAggregate } from "../outputs/CategoriesMaxAggregate";
import { CategoriesMinAggregate } from "../outputs/CategoriesMinAggregate";
import { CategoriesSumAggregate } from "../outputs/CategoriesSumAggregate";

@TypeGraphQL.ObjectType("CategoriesGroupBy", {
  isAbstract: true
})
export class CategoriesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_keywords!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url!: string | null;

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
