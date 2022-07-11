import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_roles__RoleUpdateManyMutationInput } from "../../../inputs/Join_roles__RoleUpdateManyMutationInput";
import { Join_roles__RoleWhereInput } from "../../../inputs/Join_roles__RoleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJoin_roles__RoleArgs {
  @TypeGraphQL.Field(_type => Join_roles__RoleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Join_roles__RoleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Join_roles__RoleWhereInput, {
    nullable: true
  })
  where?: Join_roles__RoleWhereInput | undefined;
}
