import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsCreateInput } from "../../../inputs/PluginsCreateInput";
import { PluginsUpdateInput } from "../../../inputs/PluginsUpdateInput";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPluginsArgs {
  @TypeGraphQL.Field(_type => PluginsWhereUniqueInput, {
    nullable: false
  })
  where!: PluginsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PluginsCreateInput, {
    nullable: false
  })
  create!: PluginsCreateInput;

  @TypeGraphQL.Field(_type => PluginsUpdateInput, {
    nullable: false
  })
  update!: PluginsUpdateInput;
}
