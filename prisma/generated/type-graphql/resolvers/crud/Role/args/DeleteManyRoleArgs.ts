import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRoleArgs {
  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;
}
