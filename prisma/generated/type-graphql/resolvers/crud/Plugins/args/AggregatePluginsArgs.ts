import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsOrderByWithRelationInput } from "../../../inputs/PluginsOrderByWithRelationInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePluginsArgs {
  @TypeGraphQL.Field(_type => PluginsWhereInput, {
    nullable: true
  })
  where?: PluginsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PluginsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PluginsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PluginsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PluginsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
