import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesOrderByWithAggregationInput } from "../../../inputs/WorkspacesOrderByWithAggregationInput";
import { WorkspacesScalarWhereWithAggregatesInput } from "../../../inputs/WorkspacesScalarWhereWithAggregatesInput";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";
import { WorkspacesScalarFieldEnum } from "../../../../enums/WorkspacesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesWhereInput, {
    nullable: true
  })
  where?: WorkspacesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WorkspacesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "code" | "name" | "description" | "customers" | "users" | "products" | "tasks" | "brands" | "shops" | "category" | "isPublic" | "projects" | "author" | "media">;

  @TypeGraphQL.Field(_type => WorkspacesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WorkspacesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
