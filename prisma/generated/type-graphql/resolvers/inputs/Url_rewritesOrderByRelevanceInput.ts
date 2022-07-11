import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { Url_rewritesOrderByRelevanceFieldEnum } from "../../enums/Url_rewritesOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("Url_rewritesOrderByRelevanceInput", {
  isAbstract: true
})
export class Url_rewritesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Url_rewritesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"request_path" | "description" | "target_path" | "store">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
