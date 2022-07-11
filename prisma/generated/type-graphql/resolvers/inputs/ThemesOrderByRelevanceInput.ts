import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { ThemesOrderByRelevanceFieldEnum } from "../../enums/ThemesOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("ThemesOrderByRelevanceInput", {
  isAbstract: true
})
export class ThemesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ThemesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"title" | "parent_theme" | "theme_path" | "action">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
