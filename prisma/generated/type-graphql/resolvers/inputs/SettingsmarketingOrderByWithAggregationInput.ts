import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsmarketingAvgOrderByAggregateInput } from "../inputs/SettingsmarketingAvgOrderByAggregateInput";
import { SettingsmarketingCountOrderByAggregateInput } from "../inputs/SettingsmarketingCountOrderByAggregateInput";
import { SettingsmarketingMaxOrderByAggregateInput } from "../inputs/SettingsmarketingMaxOrderByAggregateInput";
import { SettingsmarketingMinOrderByAggregateInput } from "../inputs/SettingsmarketingMinOrderByAggregateInput";
import { SettingsmarketingSumOrderByAggregateInput } from "../inputs/SettingsmarketingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingsmarketingOrderByWithAggregationInput", {
  isAbstract: true
})
export class SettingsmarketingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mail_port?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recaptcha_api?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adsense_api?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sitemap_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_data_lifetime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mail_server?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SettingsmarketingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SettingsmarketingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsmarketingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SettingsmarketingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsmarketingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SettingsmarketingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsmarketingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SettingsmarketingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsmarketingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SettingsmarketingSumOrderByAggregateInput | undefined;
}
