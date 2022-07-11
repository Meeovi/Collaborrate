import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsWhereInput, {
    nullable: true
  })
  where?: PermissionsWhereInput | undefined;
}
