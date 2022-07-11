import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { General_settingsAvgOrderByAggregateInput } from "../inputs/General_settingsAvgOrderByAggregateInput";
import { General_settingsCountOrderByAggregateInput } from "../inputs/General_settingsCountOrderByAggregateInput";
import { General_settingsMaxOrderByAggregateInput } from "../inputs/General_settingsMaxOrderByAggregateInput";
import { General_settingsMinOrderByAggregateInput } from "../inputs/General_settingsMinOrderByAggregateInput";
import { General_settingsSumOrderByAggregateInput } from "../inputs/General_settingsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("General_settingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class General_settingsOrderByWithAggregationInput {
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
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagline?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  access_restrictions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  restriction_mode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startup_page?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  landing_page?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  http_response?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_contact?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_contact_two?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_support?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => General_settingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: General_settingsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => General_settingsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: General_settingsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => General_settingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: General_settingsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => General_settingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: General_settingsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => General_settingsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: General_settingsSumOrderByAggregateInput | undefined;
}
