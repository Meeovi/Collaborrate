import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingshopAvgAggregate } from "../outputs/SettingshopAvgAggregate";
import { SettingshopCountAggregate } from "../outputs/SettingshopCountAggregate";
import { SettingshopMaxAggregate } from "../outputs/SettingshopMaxAggregate";
import { SettingshopMinAggregate } from "../outputs/SettingshopMinAggregate";
import { SettingshopSumAggregate } from "../outputs/SettingshopSumAggregate";

@TypeGraphQL.ObjectType("SettingshopGroupBy", {
  isAbstract: true
})
export class SettingshopGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

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

  @TypeGraphQL.Field(_type => SettingshopCountAggregate, {
    nullable: true
  })
  _count!: SettingshopCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingshopAvgAggregate, {
    nullable: true
  })
  _avg!: SettingshopAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingshopSumAggregate, {
    nullable: true
  })
  _sum!: SettingshopSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingshopMinAggregate, {
    nullable: true
  })
  _min!: SettingshopMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingshopMaxAggregate, {
    nullable: true
  })
  _max!: SettingshopMaxAggregate | null;
}
