import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersOrderByWithRelationInput } from "../../../inputs/SettingscustomersOrderByWithRelationInput";
import { SettingscustomersWhereInput } from "../../../inputs/SettingscustomersWhereInput";
import { SettingscustomersWhereUniqueInput } from "../../../inputs/SettingscustomersWhereUniqueInput";
import { SettingscustomersScalarFieldEnum } from "../../../../enums/SettingscustomersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersWhereInput, {
    nullable: true
  })
  where?: SettingscustomersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SettingscustomersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingscustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "login_as_customer" | "share_customer_accounts" | "online_minutes_interval" | "customer_data_lifetime" | "email_after_registration"> | undefined;
}
