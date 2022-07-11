import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesCreateInput } from "../../../inputs/RolesCreateInput";
import { RolesUpdateInput } from "../../../inputs/RolesUpdateInput";
import { RolesWhereUniqueInput } from "../../../inputs/RolesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRolesArgs {
  @TypeGraphQL.Field(_type => RolesWhereUniqueInput, {
    nullable: false
  })
  where!: RolesWhereUniqueInput;

  @TypeGraphQL.Field(_type => RolesCreateInput, {
    nullable: false
  })
  create!: RolesCreateInput;

  @TypeGraphQL.Field(_type => RolesUpdateInput, {
    nullable: false
  })
  update!: RolesUpdateInput;
}
