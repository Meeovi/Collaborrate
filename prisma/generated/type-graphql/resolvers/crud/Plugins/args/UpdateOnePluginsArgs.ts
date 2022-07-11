import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsUpdateInput } from "../../../inputs/PluginsUpdateInput";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePluginsArgs {
  @TypeGraphQL.Field(_type => PluginsUpdateInput, {
    nullable: false
  })
  data!: PluginsUpdateInput;

  @TypeGraphQL.Field(_type => PluginsWhereUniqueInput, {
    nullable: false
  })
  where!: PluginsWhereUniqueInput;
}
