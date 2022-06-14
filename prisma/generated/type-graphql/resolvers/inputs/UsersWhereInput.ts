import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EmailsListRelationFilter } from "../inputs/EmailsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MediamanagerListRelationFilter } from "../inputs/MediamanagerListRelationFilter";
import { MessagesListRelationFilter } from "../inputs/MessagesListRelationFilter";
import { ProjectsListRelationFilter } from "../inputs/ProjectsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WorkspacesListRelationFilter } from "../inputs/WorkspacesListRelationFilter";

@TypeGraphQL.InputType("UsersWhereInput", {
  isAbstract: true
})
export class UsersWhereInput {
  @TypeGraphQL.Field(_type => [UsersWhereInput], {
    nullable: true
  })
  AND?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersWhereInput], {
    nullable: true
  })
  OR?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersWhereInput], {
    nullable: true
  })
  NOT?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  last_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  interface_locale?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  value?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  permissions?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EmailsListRelationFilter, {
    nullable: true
  })
  emails?: EmailsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediamanagerListRelationFilter, {
    nullable: true
  })
  mediamanager?: MediamanagerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessagesListRelationFilter, {
    nullable: true
  })
  messages?: MessagesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectsListRelationFilter, {
    nullable: true
  })
  projects?: ProjectsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WorkspacesListRelationFilter, {
    nullable: true
  })
  workspaces?: WorkspacesListRelationFilter | undefined;
}
