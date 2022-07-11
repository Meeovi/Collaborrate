import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_users__RoleWhereInput } from "../../../inputs/Join_users__RoleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyJoin_users__RoleArgs {
  @TypeGraphQL.Field(_type => Join_users__RoleWhereInput, {
    nullable: true
  })
  where?: Join_users__RoleWhereInput | undefined;
}
