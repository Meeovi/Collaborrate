import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MediamanagerListRelationFilter } from "../inputs/MediamanagerListRelationFilter";
import { ProjectsListRelationFilter } from "../inputs/ProjectsListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WorkspacesListRelationFilter } from "../inputs/WorkspacesListRelationFilter";

@TypeGraphQL.InputType("TasksWhereInput", {
  isAbstract: true
})
export class TasksWhereInput {
  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  AND?: TasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  OR?: TasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  NOT?: TasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  subject?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  start_date?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  due_date?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  priority?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  status?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  related_to?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  contact?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  assigned_to?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  date_modified?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => MediamanagerListRelationFilter, {
    nullable: true
  })
  mediamanager?: MediamanagerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectsListRelationFilter, {
    nullable: true
  })
  projects?: ProjectsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WorkspacesListRelationFilter, {
    nullable: true
  })
  workspaces?: WorkspacesListRelationFilter | undefined;
}
