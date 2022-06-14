import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticlesAvgAggregate } from "../outputs/ArticlesAvgAggregate";
import { ArticlesCountAggregate } from "../outputs/ArticlesCountAggregate";
import { ArticlesMaxAggregate } from "../outputs/ArticlesMaxAggregate";
import { ArticlesMinAggregate } from "../outputs/ArticlesMinAggregate";
import { ArticlesSumAggregate } from "../outputs/ArticlesSumAggregate";

@TypeGraphQL.ObjectType("AggregateArticles", {
  isAbstract: true
})
export class AggregateArticles {
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
