import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesAvgOrderByAggregateInput } from "../inputs/ThemesAvgOrderByAggregateInput";
import { ThemesCountOrderByAggregateInput } from "../inputs/ThemesCountOrderByAggregateInput";
import { ThemesMaxOrderByAggregateInput } from "../inputs/ThemesMaxOrderByAggregateInput";
import { ThemesMinOrderByAggregateInput } from "../inputs/ThemesMinOrderByAggregateInput";
import { ThemesSumOrderByAggregateInput } from "../inputs/ThemesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThemesOrderByWithAggregationInput", {
  isAbstract: true
})
export class ThemesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parent_theme?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  theme_path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  action?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ThemesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ThemesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThemesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ThemesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThemesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ThemesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThemesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ThemesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThemesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ThemesSumOrderByAggregateInput | undefined;
}
