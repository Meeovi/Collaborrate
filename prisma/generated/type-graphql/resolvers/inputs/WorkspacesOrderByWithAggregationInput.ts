import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesAvgOrderByAggregateInput } from "../inputs/WorkspacesAvgOrderByAggregateInput";
import { WorkspacesCountOrderByAggregateInput } from "../inputs/WorkspacesCountOrderByAggregateInput";
import { WorkspacesMaxOrderByAggregateInput } from "../inputs/WorkspacesMaxOrderByAggregateInput";
import { WorkspacesMinOrderByAggregateInput } from "../inputs/WorkspacesMinOrderByAggregateInput";
import { WorkspacesSumOrderByAggregateInput } from "../inputs/WorkspacesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WorkspacesOrderByWithAggregationInput", {
  isAbstract: true
})
export class WorkspacesOrderByWithAggregationInput {
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
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

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
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tasks?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  brands?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shops?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projects?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WorkspacesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WorkspacesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WorkspacesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WorkspacesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WorkspacesSumOrderByAggregateInput | undefined;
}
