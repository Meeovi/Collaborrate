import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PagesAvgOrderByAggregateInput } from "../inputs/PagesAvgOrderByAggregateInput";
import { PagesCountOrderByAggregateInput } from "../inputs/PagesCountOrderByAggregateInput";
import { PagesMaxOrderByAggregateInput } from "../inputs/PagesMaxOrderByAggregateInput";
import { PagesMinOrderByAggregateInput } from "../inputs/PagesMinOrderByAggregateInput";
import { PagesSumOrderByAggregateInput } from "../inputs/PagesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PagesOrderByWithAggregationInput", {
  isAbstract: true
})
export class PagesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enable_page?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content_title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url_key?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => PagesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PagesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PagesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PagesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PagesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PagesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PagesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PagesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PagesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PagesSumOrderByAggregateInput | undefined;
}
