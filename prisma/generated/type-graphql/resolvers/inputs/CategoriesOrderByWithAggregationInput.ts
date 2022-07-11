import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesAvgOrderByAggregateInput } from "../inputs/CategoriesAvgOrderByAggregateInput";
import { CategoriesCountOrderByAggregateInput } from "../inputs/CategoriesCountOrderByAggregateInput";
import { CategoriesMaxOrderByAggregateInput } from "../inputs/CategoriesMaxOrderByAggregateInput";
import { CategoriesMinOrderByAggregateInput } from "../inputs/CategoriesMinOrderByAggregateInput";
import { CategoriesSumOrderByAggregateInput } from "../inputs/CategoriesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriesOrderByWithAggregationInput", {
  isAbstract: true
})
export class CategoriesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  thumbnail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  websites?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

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
  meta_title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_keywords?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoriesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoriesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategoriesSumOrderByAggregateInput | undefined;
}
