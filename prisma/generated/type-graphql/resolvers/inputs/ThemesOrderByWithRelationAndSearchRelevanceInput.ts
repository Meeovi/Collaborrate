import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesOrderByRelevanceInput } from "../inputs/ThemesOrderByRelevanceInput";
import { WebsitesOrderByWithRelationAndSearchRelevanceInput } from "../inputs/WebsitesOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThemesOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class ThemesOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parent_theme?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  theme_path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  action?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WebsitesOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  websites?: WebsitesOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ThemesOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: ThemesOrderByRelevanceInput | undefined;
}
