import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProvidersAvgOrderByAggregateInput } from "../inputs/ProvidersAvgOrderByAggregateInput";
import { ProvidersCountOrderByAggregateInput } from "../inputs/ProvidersCountOrderByAggregateInput";
import { ProvidersMaxOrderByAggregateInput } from "../inputs/ProvidersMaxOrderByAggregateInput";
import { ProvidersMinOrderByAggregateInput } from "../inputs/ProvidersMinOrderByAggregateInput";
import { ProvidersSumOrderByAggregateInput } from "../inputs/ProvidersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProvidersOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProvidersOrderByWithAggregationInput {
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
  client_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  client_secret?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  host_uri?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  redirect_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  redirect_url_app?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProvidersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProvidersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProvidersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProvidersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProvidersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProvidersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProvidersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProvidersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProvidersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProvidersSumOrderByAggregateInput | undefined;
}
