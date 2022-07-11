import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticlesOrderByRelevanceFieldEnum } from "../../enums/ArticlesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArticlesOrderByRelevanceInput", {
  isAbstract: true
})
export class ArticlesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ArticlesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "excerpt" | "content" | "image" | "categories" | "customers" | "users" | "published" | "isPublic" | "meta_description" | "meta_name" | "meta_url" | "tags">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
