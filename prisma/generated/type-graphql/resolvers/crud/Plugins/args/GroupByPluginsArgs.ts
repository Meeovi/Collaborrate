import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsOrderByWithAggregationInput } from "../../../inputs/PluginsOrderByWithAggregationInput";
import { PluginsScalarWhereWithAggregatesInput } from "../../../inputs/PluginsScalarWhereWithAggregatesInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";
import { PluginsScalarFieldEnum } from "../../../../enums/PluginsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPluginsArgs {
  @TypeGraphQL.Field(_type => PluginsWhereInput, {
    nullable: true
  })
  where?: PluginsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PluginsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PluginsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PluginsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "url" | "github_link" | "description" | "logo" | "screenshots" | "last_updated" | "publisher_name" | "agree_terms" | "publisher_email">;

  @TypeGraphQL.Field(_type => PluginsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PluginsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
