import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingscustomersAvgOrderByAggregateInput } from "../inputs/SettingscustomersAvgOrderByAggregateInput";
import { SettingscustomersCountOrderByAggregateInput } from "../inputs/SettingscustomersCountOrderByAggregateInput";
import { SettingscustomersMaxOrderByAggregateInput } from "../inputs/SettingscustomersMaxOrderByAggregateInput";
import { SettingscustomersMinOrderByAggregateInput } from "../inputs/SettingscustomersMinOrderByAggregateInput";
import { SettingscustomersSumOrderByAggregateInput } from "../inputs/SettingscustomersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingscustomersOrderByWithAggregationInput", {
  isAbstract: true
})
export class SettingscustomersOrderByWithAggregationInput {
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
  login_as_customer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  share_customer_accounts?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  online_minutes_interval?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_data_lifetime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email_after_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SettingscustomersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SettingscustomersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingscustomersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SettingscustomersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingscustomersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SettingscustomersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingscustomersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SettingscustomersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingscustomersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SettingscustomersSumOrderByAggregateInput | undefined;
}
