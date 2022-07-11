import * as TypeGraphQL from "type-graphql";

export enum SettingshopScalarFieldEnum {
  id = "id",
  enable_product_assignment = "enable_product_assignment",
  product_videos = "product_videos",
  seller_payouts = "seller_payouts",
  admin_approval = "admin_approval",
  enable_review_system = "enable_review_system",
  customer_rate_vendor = "customer_rate_vendor",
  multishipping = "multishipping",
  vendor_transaction_id = "vendor_transaction_id",
  enable_vendor_product_attribute = "enable_vendor_product_attribute"
}
TypeGraphQL.registerEnumType(SettingshopScalarFieldEnum, {
  name: "SettingshopScalarFieldEnum",
  description: undefined,
});
