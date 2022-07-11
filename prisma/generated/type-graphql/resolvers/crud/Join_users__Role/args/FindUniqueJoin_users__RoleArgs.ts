import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_users__RoleWhereUniqueInput } from "../../../inputs/Join_users__RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueJoin_users__RoleArgs {
  @TypeGraphQL.Field(_type => Join_users__RoleWhereUniqueInput, {
    nullable: false
  })
  where!: Join_users__RoleWhereUniqueInput;
}
