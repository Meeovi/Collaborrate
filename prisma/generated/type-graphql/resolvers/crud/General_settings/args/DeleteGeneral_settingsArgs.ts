import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsWhereUniqueInput } from "../../../inputs/General_settingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsWhereUniqueInput, {
    nullable: false
  })
  where!: General_settingsWhereUniqueInput;
}
