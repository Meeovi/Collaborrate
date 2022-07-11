import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginsAvgOrderByAggregateInput } from "../inputs/PluginsAvgOrderByAggregateInput";
import { PluginsCountOrderByAggregateInput } from "../inputs/PluginsCountOrderByAggregateInput";
import { PluginsMaxOrderByAggregateInput } from "../inputs/PluginsMaxOrderByAggregateInput";
import { PluginsMinOrderByAggregateInput } from "../inputs/PluginsMinOrderByAggregateInput";
import { PluginsSumOrderByAggregateInput } from "../inputs/PluginsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PluginsOrderByWithAggregationInput", {
  isAbstract: true
})
export class PluginsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  github_link?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  logo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  screenshots?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_updated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  publisher_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agree_terms?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  publisher_email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PluginsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PluginsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PluginsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PluginsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PluginsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PluginsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PluginsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PluginsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PluginsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PluginsSumOrderByAggregateInput | undefined;
}
