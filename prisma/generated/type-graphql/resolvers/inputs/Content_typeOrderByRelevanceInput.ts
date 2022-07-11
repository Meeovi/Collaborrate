import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Content_typeOrderByRelevanceFieldEnum } from "../../enums/Content_typeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Content_typeOrderByRelevanceInput", {
  isAbstract: true
})
export class Content_typeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Content_typeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"text" | "link" | "email" | "uid" | "rich_text" | "password" | "media" | "database_name">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
