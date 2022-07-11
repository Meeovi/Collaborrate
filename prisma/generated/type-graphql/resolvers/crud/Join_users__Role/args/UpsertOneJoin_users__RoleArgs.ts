import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_users__RoleCreateInput } from "../../../inputs/Join_users__RoleCreateInput";
import { Join_users__RoleUpdateInput } from "../../../inputs/Join_users__RoleUpdateInput";
import { Join_users__RoleWhereUniqueInput } from "../../../inputs/Join_users__RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneJoin_users__RoleArgs {
  @TypeGraphQL.Field(_type => Join_users__RoleWhereUniqueInput, {
    nullable: false
  })
  where!: Join_users__RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Join_users__RoleCreateInput, {
    nullable: false
  })
  create!: Join_users__RoleCreateInput;

  @TypeGraphQL.Field(_type => Join_users__RoleUpdateInput, {
    nullable: false
  })
  update!: Join_users__RoleUpdateInput;
}
