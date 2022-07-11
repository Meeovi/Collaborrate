import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesWhereInput } from "../../../inputs/RolesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRolesArgs {
  @TypeGraphQL.Field(_type => RolesWhereInput, {
    nullable: true
  })
  where?: RolesWhereInput | undefined;
}
