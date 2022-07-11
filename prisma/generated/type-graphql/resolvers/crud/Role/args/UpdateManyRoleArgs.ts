import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleUpdateManyMutationInput } from "../../../inputs/RoleUpdateManyMutationInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRoleArgs {
  @TypeGraphQL.Field(_type => RoleUpdateManyMutationInput, {
    nullable: false
  })
  data!: RoleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;
}
