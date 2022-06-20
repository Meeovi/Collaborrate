import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingscustomersOrderByRelevanceFieldEnum } from "../../enums/SettingscustomersOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingscustomersOrderByRelevanceInput", {
  isAbstract: true
})
export class SettingscustomersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SettingscustomersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"login_as_customer" | "share_customer_accounts" | "online_minutes_interval" | "customer_data_lifetime" | "email_after_registration">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
