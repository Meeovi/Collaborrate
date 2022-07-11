import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { WebhooksOrderByRelevanceFieldEnum } from "../../enums/WebhooksOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("WebhooksOrderByRelevanceInput", {
  isAbstract: true
})
export class WebhooksOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [WebhooksOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "url" | "headers" | "create" | "retrieve" | "update" | "delete" | "publish" | "unpublish">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
