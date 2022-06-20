import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingshopOrderByWithRelationAndSearchRelevanceInput";
import { SettingshopWhereInput } from "../../../inputs/SettingshopWhereInput";
import { SettingshopWhereUniqueInput } from "../../../inputs/SettingshopWhereUniqueInput";
import { SettingshopScalarFieldEnum } from "../../../../enums/SettingshopScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopWhereInput, {
    nullable: true
  })
  where?: SettingshopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingshopOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SettingshopOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingshopWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingshopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SettingshopScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "enable_product_assignment" | "product_videos" | "seller_payouts" | "admin_approval" | "enable_review_system" | "customer_rate_vendor" | "multishipping" | "vendor_transaction_id" | "enable_vendor_product_attribute"> | undefined;
}
