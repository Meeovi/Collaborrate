import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticlesAvgAggregate } from "../outputs/ArticlesAvgAggregate";
import { ArticlesCountAggregate } from "../outputs/ArticlesCountAggregate";
import { ArticlesMaxAggregate } from "../outputs/ArticlesMaxAggregate";
import { ArticlesMinAggregate } from "../outputs/ArticlesMinAggregate";
import { ArticlesSumAggregate } from "../outputs/ArticlesSumAggregate";

@TypeGraphQL.ObjectType("ArticlesGroupBy", {
  isAbstract: true
})
export class ArticlesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  excerpt!: string;

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
  categories!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  published!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags!: string | null;

  @TypeGraphQL.Field(_type => ArticlesCountAggregate, {
    nullable: true
  })
  _count!: ArticlesCountAggregate | null;

  @TypeGraphQL.Field(_type => ArticlesAvgAggregate, {
    nullable: true
  })
  _avg!: ArticlesAvgAggregate | null;

  @TypeGraphQL.Field(_type => ArticlesSumAggregate, {
    nullable: true
  })
  _sum!: ArticlesSumAggregate | null;

  @TypeGraphQL.Field(_type => ArticlesMinAggregate, {
    nullable: true
  })
  _min!: ArticlesMinAggregate | null;

  @TypeGraphQL.Field(_type => ArticlesMaxAggregate, {
    nullable: true
  })
  _max!: ArticlesMaxAggregate | null;
}
