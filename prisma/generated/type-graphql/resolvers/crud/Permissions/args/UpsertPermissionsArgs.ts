import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsCreateInput } from "../../../inputs/PermissionsCreateInput";
import { PermissionsUpdateInput } from "../../../inputs/PermissionsUpdateInput";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionsCreateInput, {
    nullable: false
  })
  create!: PermissionsCreateInput;

  @TypeGraphQL.Field(_type => PermissionsUpdateInput, {
    nullable: false
  })
  update!: PermissionsUpdateInput;
}
