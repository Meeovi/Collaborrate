import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesOrderByWithAggregationInput } from "../../../inputs/SettingssalesOrderByWithAggregationInput";
import { SettingssalesScalarWhereWithAggregatesInput } from "../../../inputs/SettingssalesScalarWhereWithAggregatesInput";
import { SettingssalesWhereInput } from "../../../inputs/SettingssalesWhereInput";
import { SettingssalesScalarFieldEnum } from "../../../../enums/SettingssalesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesWhereInput, {
    nullable: true
  })
  where?: SettingssalesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingssalesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SettingssalesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingssalesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "analytics_account_type" | "analytics_account_number" | "analytics_anonymizeip" | "analytics_content_experiments" | "adwords_conversionid" | "adwords_conversionlanguage" | "adwords_conversionformat" | "adwords_conversioncolor" | "adwords_conversionlabel" | "adwords_conversionvalue_type" | "adwords_sendorder" | "tag_manager_anonymizeip" | "tag_manager_contentexperiments" | "tag_manager_containerid">;

  @TypeGraphQL.Field(_type => SettingssalesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SettingssalesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
