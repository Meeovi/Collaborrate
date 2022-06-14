import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesUpdateManyMutationInput } from "../../../inputs/RolesUpdateManyMutationInput";
import { RolesWhereInput } from "../../../inputs/RolesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRolesArgs {
  @TypeGraphQL.Field(_type => RolesUpdateManyMutationInput, {
    nullable: false
  })
  data!: RolesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RolesWhereInput, {
    nullable: true
  })
  where?: RolesWhereInput | undefined;
}
