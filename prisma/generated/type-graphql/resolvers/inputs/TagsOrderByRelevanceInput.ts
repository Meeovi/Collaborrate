import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { TagsOrderByRelevanceFieldEnum } from "../../enums/TagsOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("TagsOrderByRelevanceInput", {
  isAbstract: true
})
export class TagsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [TagsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "excerpt" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
