import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PluginsOrderByWithRelationAndSearchRelevanceInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";
import { PluginsScalarFieldEnum } from "../../../../enums/PluginsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPluginsArgs {
  @TypeGraphQL.Field(_type => PluginsWhereInput, {
    nullable: true
  })
  where?: PluginsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PluginsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PluginsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PluginsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "url" | "github_link" | "description" | "logo" | "screenshots" | "last_updated" | "publisher_name" | "agree_terms" | "publisher_email"> | undefined;
}
