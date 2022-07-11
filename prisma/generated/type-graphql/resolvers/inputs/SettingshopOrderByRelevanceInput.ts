import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingshopOrderByRelevanceFieldEnum } from "../../enums/SettingshopOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingshopOrderByRelevanceInput", {
  isAbstract: true
})
export class SettingshopOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SettingshopOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"enable_product_assignment" | "product_videos" | "seller_payouts" | "admin_approval" | "enable_review_system" | "customer_rate_vendor" | "multishipping" | "vendor_transaction_id" | "enable_vendor_product_attribute">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
