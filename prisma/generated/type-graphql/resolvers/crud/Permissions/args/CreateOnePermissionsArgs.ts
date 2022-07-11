import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsCreateInput } from "../../../inputs/PermissionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsCreateInput, {
    nullable: false
  })
  data!: PermissionsCreateInput;
}
