import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { WebsitesOrderByRelevanceFieldEnum } from "../../enums/WebsitesOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("WebsitesOrderByRelevanceInput", {
  isAbstract: true
})
export class WebsitesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [WebsitesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "url" | "shop" | "store">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
