import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesWhereUniqueInput } from "../../../inputs/RolesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRolesArgs {
  @TypeGraphQL.Field(_type => RolesWhereUniqueInput, {
    nullable: false
  })
  where!: RolesWhereUniqueInput;
}
