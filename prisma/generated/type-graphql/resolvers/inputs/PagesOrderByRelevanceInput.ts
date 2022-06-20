import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PagesOrderByRelevanceFieldEnum } from "../../enums/PagesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PagesOrderByRelevanceInput", {
  isAbstract: true
})
export class PagesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PagesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"title" | "content_title" | "content" | "url_key" | "meta_title" | "meta_keywords" | "meta_description">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
