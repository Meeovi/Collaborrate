import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsmarketingOrderByRelevanceFieldEnum } from "../../enums/SettingsmarketingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingsmarketingOrderByRelevanceInput", {
  isAbstract: true
})
export class SettingsmarketingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SettingsmarketingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"mail_port" | "recaptcha_api" | "adsense_api" | "sitemap_url" | "customer_data_lifetime" | "mail_server">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
