import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopOrderByWithAggregationInput } from "../../../inputs/SettingshopOrderByWithAggregationInput";
import { SettingshopScalarWhereWithAggregatesInput } from "../../../inputs/SettingshopScalarWhereWithAggregatesInput";
import { SettingshopWhereInput } from "../../../inputs/SettingshopWhereInput";
import { SettingshopScalarFieldEnum } from "../../../../enums/SettingshopScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopWhereInput, {
    nullable: true
  })
  where?: SettingshopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingshopOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SettingshopOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingshopScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "enable_product_assignment" | "product_videos" | "seller_payouts" | "admin_approval" | "enable_review_system" | "customer_rate_vendor" | "multishipping" | "vendor_transaction_id" | "enable_vendor_product_attribute">;

  @TypeGraphQL.Field(_type => SettingshopScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SettingshopScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
