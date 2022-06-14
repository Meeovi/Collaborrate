import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsOrderByWithAggregationInput } from "../../../inputs/PermissionsOrderByWithAggregationInput";
import { PermissionsScalarWhereWithAggregatesInput } from "../../../inputs/PermissionsScalarWhereWithAggregatesInput";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";
import { PermissionsScalarFieldEnum } from "../../../../enums/PermissionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsWhereInput, {
    nullable: true
  })
  where?: PermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PermissionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PermissionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "content" | "role" | "create" | "read" | "update" | "delete" | "users">;

  @TypeGraphQL.Field(_type => PermissionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PermissionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
