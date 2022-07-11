import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsUpdateInput } from "../../../inputs/PermissionsUpdateInput";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsUpdateInput, {
    nullable: false
  })
  data!: PermissionsUpdateInput;

  @TypeGraphQL.Field(_type => PermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionsWhereUniqueInput;
}
