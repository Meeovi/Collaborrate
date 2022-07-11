import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsWhereInput } from "../../../inputs/General_settingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsWhereInput, {
    nullable: true
  })
  where?: General_settingsWhereInput | undefined;
}
