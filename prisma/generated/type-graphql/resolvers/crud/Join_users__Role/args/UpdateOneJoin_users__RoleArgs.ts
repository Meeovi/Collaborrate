import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_users__RoleUpdateInput } from "../../../inputs/Join_users__RoleUpdateInput";
import { Join_users__RoleWhereUniqueInput } from "../../../inputs/Join_users__RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneJoin_users__RoleArgs {
  @TypeGraphQL.Field(_type => Join_users__RoleUpdateInput, {
    nullable: false
  })
  data!: Join_users__RoleUpdateInput;

  @TypeGraphQL.Field(_type => Join_users__RoleWhereUniqueInput, {
    nullable: false
  })
  where!: Join_users__RoleWhereUniqueInput;
}
