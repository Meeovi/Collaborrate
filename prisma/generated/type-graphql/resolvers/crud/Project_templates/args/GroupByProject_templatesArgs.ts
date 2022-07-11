import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesOrderByWithAggregationInput } from "../../../inputs/Project_templatesOrderByWithAggregationInput";
import { Project_templatesScalarWhereWithAggregatesInput } from "../../../inputs/Project_templatesScalarWhereWithAggregatesInput";
import { Project_templatesWhereInput } from "../../../inputs/Project_templatesWhereInput";
import { Project_templatesScalarFieldEnum } from "../../../../enums/Project_templatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProject_templatesArgs {
  @TypeGraphQL.Field(_type => Project_templatesWhereInput, {
    nullable: true
  })
  where?: Project_templatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Project_templatesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Project_templatesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Project_templatesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "status" | "consider_working_days" | "priority" | "project_manager" | "resource" | "content">;

  @TypeGraphQL.Field(_type => Project_templatesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Project_templatesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
