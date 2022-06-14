import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingshopAvgOrderByAggregateInput } from "../inputs/SettingshopAvgOrderByAggregateInput";
import { SettingshopCountOrderByAggregateInput } from "../inputs/SettingshopCountOrderByAggregateInput";
import { SettingshopMaxOrderByAggregateInput } from "../inputs/SettingshopMaxOrderByAggregateInput";
import { SettingshopMinOrderByAggregateInput } from "../inputs/SettingshopMinOrderByAggregateInput";
import { SettingshopSumOrderByAggregateInput } from "../inputs/SettingshopSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingshopOrderByWithAggregationInput", {
  isAbstract: true
})
export class SettingshopOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enable_product_assignment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_videos?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  seller_payouts?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  admin_approval?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enable_review_system?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_rate_vendor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  multishipping?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  vendor_transaction_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enable_vendor_product_attribute?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SettingshopCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SettingshopCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingshopAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SettingshopAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingshopMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SettingshopMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingshopMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SettingshopMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingshopSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SettingshopSumOrderByAggregateInput | undefined;
}
