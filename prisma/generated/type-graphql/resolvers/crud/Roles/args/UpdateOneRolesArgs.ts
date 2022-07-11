import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesUpdateInput } from "../../../inputs/RolesUpdateInput";
import { RolesWhereUniqueInput } from "../../../inputs/RolesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRolesArgs {
  @TypeGraphQL.Field(_type => RolesUpdateInput, {
    nullable: false
  })
  data!: RolesUpdateInput;

  @TypeGraphQL.Field(_type => RolesWhereUniqueInput, {
    nullable: false
  })
  where!: RolesWhereUniqueInput;
}
