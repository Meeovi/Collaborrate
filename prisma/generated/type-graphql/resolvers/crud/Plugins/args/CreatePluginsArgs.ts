import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsCreateInput } from "../../../inputs/PluginsCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePluginsArgs {
  @TypeGraphQL.Field(_type => PluginsCreateInput, {
    nullable: false
  })
  data!: PluginsCreateInput;
}
