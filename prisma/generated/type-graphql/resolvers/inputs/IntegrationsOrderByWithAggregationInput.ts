import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationsAvgOrderByAggregateInput } from "../inputs/IntegrationsAvgOrderByAggregateInput";
import { IntegrationsCountOrderByAggregateInput } from "../inputs/IntegrationsCountOrderByAggregateInput";
import { IntegrationsMaxOrderByAggregateInput } from "../inputs/IntegrationsMaxOrderByAggregateInput";
import { IntegrationsMinOrderByAggregateInput } from "../inputs/IntegrationsMinOrderByAggregateInput";
import { IntegrationsSumOrderByAggregateInput } from "../inputs/IntegrationsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationsOrderByWithAggregationInput", {
  isAbstract: true
})
export class IntegrationsOrderByWithAggregationInput {
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
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IntegrationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IntegrationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IntegrationsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IntegrationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IntegrationsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IntegrationsSumOrderByAggregateInput | undefined;
}
