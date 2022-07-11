import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersOrderByWithAggregationInput } from "../../../inputs/SettingscustomersOrderByWithAggregationInput";
import { SettingscustomersScalarWhereWithAggregatesInput } from "../../../inputs/SettingscustomersScalarWhereWithAggregatesInput";
import { SettingscustomersWhereInput } from "../../../inputs/SettingscustomersWhereInput";
import { SettingscustomersScalarFieldEnum } from "../../../../enums/SettingscustomersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersWhereInput, {
    nullable: true
  })
  where?: SettingscustomersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SettingscustomersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "login_as_customer" | "share_customer_accounts" | "online_minutes_interval" | "customer_data_lifetime" | "email_after_registration">;

  @TypeGraphQL.Field(_type => SettingscustomersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SettingscustomersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
