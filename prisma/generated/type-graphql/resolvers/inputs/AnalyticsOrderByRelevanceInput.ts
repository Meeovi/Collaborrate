import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnalyticsOrderByRelevanceFieldEnum } from "../../enums/AnalyticsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AnalyticsOrderByRelevanceInput", {
  isAbstract: true
})
export class AnalyticsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [AnalyticsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "country" | "share_data" | "website_name" | "client_id" | "client_secret" | "tracking_id" | "property_name" | "url" | "default_view" | "category" | "property_hit" | "tracking_code" | "search_analytics">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
