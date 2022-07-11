import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Project_templatesAvgOrderByAggregateInput } from "../inputs/Project_templatesAvgOrderByAggregateInput";
import { Project_templatesCountOrderByAggregateInput } from "../inputs/Project_templatesCountOrderByAggregateInput";
import { Project_templatesMaxOrderByAggregateInput } from "../inputs/Project_templatesMaxOrderByAggregateInput";
import { Project_templatesMinOrderByAggregateInput } from "../inputs/Project_templatesMinOrderByAggregateInput";
import { Project_templatesSumOrderByAggregateInput } from "../inputs/Project_templatesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Project_templatesOrderByWithAggregationInput", {
  isAbstract: true
})
export class Project_templatesOrderByWithAggregationInput {
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
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  consider_working_days?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_manager?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resource?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Project_templatesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Project_templatesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Project_templatesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Project_templatesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Project_templatesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Project_templatesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Project_templatesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Project_templatesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Project_templatesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Project_templatesSumOrderByAggregateInput | undefined;
}
