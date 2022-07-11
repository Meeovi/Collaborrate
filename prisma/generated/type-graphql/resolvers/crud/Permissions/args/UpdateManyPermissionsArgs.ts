import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsUpdateManyMutationInput } from "../../../inputs/PermissionsUpdateManyMutationInput";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PermissionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PermissionsWhereInput, {
    nullable: true
  })
  where?: PermissionsWhereInput | undefined;
}
