import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticlesAvgOrderByAggregateInput } from "../inputs/ArticlesAvgOrderByAggregateInput";
import { ArticlesCountOrderByAggregateInput } from "../inputs/ArticlesCountOrderByAggregateInput";
import { ArticlesMaxOrderByAggregateInput } from "../inputs/ArticlesMaxOrderByAggregateInput";
import { ArticlesMinOrderByAggregateInput } from "../inputs/ArticlesMinOrderByAggregateInput";
import { ArticlesSumOrderByAggregateInput } from "../inputs/ArticlesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArticlesOrderByWithAggregationInput", {
  isAbstract: true
})
export class ArticlesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  excerpt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categories?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  users?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tags?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArticlesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ArticlesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArticlesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ArticlesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArticlesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ArticlesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArticlesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ArticlesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArticlesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ArticlesSumOrderByAggregateInput | undefined;
}
