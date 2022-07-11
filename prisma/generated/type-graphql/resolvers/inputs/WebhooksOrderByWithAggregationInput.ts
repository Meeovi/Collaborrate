import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebhooksAvgOrderByAggregateInput } from "../inputs/WebhooksAvgOrderByAggregateInput";
import { WebhooksCountOrderByAggregateInput } from "../inputs/WebhooksCountOrderByAggregateInput";
import { WebhooksMaxOrderByAggregateInput } from "../inputs/WebhooksMaxOrderByAggregateInput";
import { WebhooksMinOrderByAggregateInput } from "../inputs/WebhooksMinOrderByAggregateInput";
import { WebhooksSumOrderByAggregateInput } from "../inputs/WebhooksSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WebhooksOrderByWithAggregationInput", {
  isAbstract: true
})
export class WebhooksOrderByWithAggregationInput {
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
  headers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  retrieve?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  delete?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  publish?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unpublish?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WebhooksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WebhooksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebhooksAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WebhooksAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebhooksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WebhooksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebhooksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WebhooksMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebhooksSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WebhooksSumOrderByAggregateInput | undefined;
}
