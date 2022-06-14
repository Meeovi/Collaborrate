import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SettingshopMaxAggregate", {
  isAbstract: true
})
export class SettingshopMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  enable_product_assignment!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_videos!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  seller_payouts!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  admin_approval!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  enable_review_system!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_rate_vendor!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  multishipping!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vendor_transaction_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  enable_vendor_product_attribute!: string | null;
}
