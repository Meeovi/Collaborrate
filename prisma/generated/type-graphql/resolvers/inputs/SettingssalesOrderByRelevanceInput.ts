import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingssalesOrderByRelevanceFieldEnum } from "../../enums/SettingssalesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingssalesOrderByRelevanceInput", {
  isAbstract: true
})
export class SettingssalesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SettingssalesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"analytics_account_type" | "analytics_account_number" | "analytics_anonymizeip" | "analytics_content_experiments" | "adwords_conversionid" | "adwords_conversionlanguage" | "adwords_conversionformat" | "adwords_conversioncolor" | "adwords_conversionlabel" | "adwords_conversionvalue_type" | "adwords_sendorder" | "tag_manager_anonymizeip" | "tag_manager_contentexperiments" | "tag_manager_containerid">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
