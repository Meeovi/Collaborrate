import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginsOrderByRelevanceFieldEnum } from "../../enums/PluginsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PluginsOrderByRelevanceInput", {
  isAbstract: true
})
export class PluginsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PluginsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "url" | "github_link" | "description" | "logo" | "screenshots" | "publisher_name" | "publisher_email">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
