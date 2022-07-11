import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionsWhereUniqueInput;
}
