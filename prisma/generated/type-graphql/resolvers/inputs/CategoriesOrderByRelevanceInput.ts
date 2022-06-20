import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOrderByRelevanceFieldEnum } from "../../enums/CategoriesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriesOrderByRelevanceInput", {
  isAbstract: true
})
export class CategoriesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CategoriesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"thumbnail" | "name" | "visibility" | "websites" | "product" | "country" | "description" | "content" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
