import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePluginsArgs {
  @TypeGraphQL.Field(_type => PluginsWhereUniqueInput, {
    nullable: false
  })
  where!: PluginsWhereUniqueInput;
}
