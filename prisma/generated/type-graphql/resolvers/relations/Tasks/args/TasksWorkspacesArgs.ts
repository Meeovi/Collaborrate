import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesOrderByWithRelationInput } from "../../../inputs/WorkspacesOrderByWithRelationInput";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";
import { WorkspacesScalarFieldEnum } from "../../../../enums/WorkspacesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TasksWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesWhereInput, {
    nullable: true
  })
  where?: WorkspacesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WorkspacesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: true
  })
  cursor?: WorkspacesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "code" | "name" | "description" | "customers" | "users" | "products" | "tasks" | "brands" | "shops" | "category" | "isPublic" | "projects" | "author" | "media"> | undefined;
}
