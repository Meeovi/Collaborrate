import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_users__RoleCreateInput } from "../../../inputs/Join_users__RoleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneJoin_users__RoleArgs {
  @TypeGraphQL.Field(_type => Join_users__RoleCreateInput, {
    nullable: false
  })
  data!: Join_users__RoleCreateInput;
}
