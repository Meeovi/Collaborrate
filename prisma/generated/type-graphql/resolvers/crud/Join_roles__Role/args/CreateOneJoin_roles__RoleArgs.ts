import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_roles__RoleCreateInput } from "../../../inputs/Join_roles__RoleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneJoin_roles__RoleArgs {
  @TypeGraphQL.Field(_type => Join_roles__RoleCreateInput, {
    nullable: false
  })
  data!: Join_roles__RoleCreateInput;
}
