import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KnowledgebaseOrderByRelevanceFieldEnum } from "../../enums/KnowledgebaseOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("KnowledgebaseOrderByRelevanceInput", {
  isAbstract: true
})
export class KnowledgebaseOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [KnowledgebaseOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "status" | "revision" | "content" | "resolution" | "author" | "approver">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
