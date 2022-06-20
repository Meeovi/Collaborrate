import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionsOrderByRelevanceFieldEnum } from "../../enums/CollectionsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CollectionsOrderByRelevanceInput", {
  isAbstract: true
})
export class CollectionsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CollectionsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "image" | "product" | "meta_title" | "meta_keywords" | "meta_description">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
