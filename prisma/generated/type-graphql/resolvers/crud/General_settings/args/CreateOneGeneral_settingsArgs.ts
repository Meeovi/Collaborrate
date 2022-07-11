import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsCreateInput } from "../../../inputs/General_settingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsCreateInput, {
    nullable: false
  })
  data!: General_settingsCreateInput;
}
