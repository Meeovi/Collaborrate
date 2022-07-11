import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsOrderByRelationAggregateInput } from "../inputs/EmailsOrderByRelationAggregateInput";
import { MediamanagerOrderByRelationAggregateInput } from "../inputs/MediamanagerOrderByRelationAggregateInput";
import { MessagesOrderByRelationAggregateInput } from "../inputs/MessagesOrderByRelationAggregateInput";
import { ProjectsOrderByRelationAggregateInput } from "../inputs/ProjectsOrderByRelationAggregateInput";
import { UsersOrderByRelevanceInput } from "../inputs/UsersOrderByRelevanceInput";
import { WorkspacesOrderByRelationAggregateInput } from "../inputs/WorkspacesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsersOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class UsersOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  interface_locale?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  permissions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmailsOrderByRelationAggregateInput, {
    nullable: true
  })
  emails?: EmailsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerOrderByRelationAggregateInput, {
    nullable: true
  })
  mediamanager?: MediamanagerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessagesOrderByRelationAggregateInput, {
    nullable: true
  })
  messages?: MessagesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesOrderByRelationAggregateInput, {
    nullable: true
  })
  workspaces?: WorkspacesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: UsersOrderByRelevanceInput | undefined;
}
