import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Shop_settingsAvgOrderByAggregateInput } from "../inputs/Shop_settingsAvgOrderByAggregateInput";
import { Shop_settingsCountOrderByAggregateInput } from "../inputs/Shop_settingsCountOrderByAggregateInput";
import { Shop_settingsMaxOrderByAggregateInput } from "../inputs/Shop_settingsMaxOrderByAggregateInput";
import { Shop_settingsMinOrderByAggregateInput } from "../inputs/Shop_settingsMinOrderByAggregateInput";
import { Shop_settingsSumOrderByAggregateInput } from "../inputs/Shop_settingsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Shop_settingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class Shop_settingsOrderByWithAggregationInput {
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
  store_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_hours?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  zipcode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_two?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  vat_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state_required_for?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_countries?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  optional_zip?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  european_union_countries?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  top_destinations?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  base_currency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_currency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allowed_currency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Shop_settingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Shop_settingsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Shop_settingsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Shop_settingsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Shop_settingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Shop_settingsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Shop_settingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Shop_settingsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Shop_settingsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Shop_settingsSumOrderByAggregateInput | undefined;
}