import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SettingshopCreateInput", {
  isAbstract: true
})
export class SettingshopCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  enable_product_assignment?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_videos?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  seller_payouts?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  admin_approval?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  enable_review_system?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_rate_vendor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  multishipping?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vendor_transaction_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  enable_vendor_product_attribute?: string | undefined;
}
