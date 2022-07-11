import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsitesAvgOrderByAggregateInput } from "../inputs/WebsitesAvgOrderByAggregateInput";
import { WebsitesCountOrderByAggregateInput } from "../inputs/WebsitesCountOrderByAggregateInput";
import { WebsitesMaxOrderByAggregateInput } from "../inputs/WebsitesMaxOrderByAggregateInput";
import { WebsitesMinOrderByAggregateInput } from "../inputs/WebsitesMinOrderByAggregateInput";
import { WebsitesSumOrderByAggregateInput } from "../inputs/WebsitesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WebsitesOrderByWithAggregationInput", {
  isAbstract: true
})
export class WebsitesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shop?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WebsitesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WebsitesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebsitesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WebsitesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebsitesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WebsitesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebsitesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WebsitesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebsitesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WebsitesSumOrderByAggregateInput | undefined;
}
