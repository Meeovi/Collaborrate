import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_roles__RoleWhereUniqueInput } from "../../../inputs/Join_roles__RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneJoin_roles__RoleArgs {
  @TypeGraphQL.Field(_type => Join_roles__RoleWhereUniqueInput, {
    nullable: false
  })
  where!: Join_roles__RoleWhereUniqueInput;
}
