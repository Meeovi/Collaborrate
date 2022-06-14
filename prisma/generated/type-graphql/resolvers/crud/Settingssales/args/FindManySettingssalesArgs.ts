import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesOrderByWithRelationInput } from "../../../inputs/SettingssalesOrderByWithRelationInput";
import { SettingssalesWhereInput } from "../../../inputs/SettingssalesWhereInput";
import { SettingssalesWhereUniqueInput } from "../../../inputs/SettingssalesWhereUniqueInput";
import { SettingssalesScalarFieldEnum } from "../../../../enums/SettingssalesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesWhereInput, {
    nullable: true
  })
  where?: SettingssalesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingssalesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SettingssalesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingssalesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SettingssalesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "analytics_account_type" | "analytics_account_number" | "analytics_anonymizeip" | "analytics_content_experiments" | "adwords_conversionid" | "adwords_conversionlanguage" | "adwords_conversionformat" | "adwords_conversioncolor" | "adwords_conversionlabel" | "adwords_conversionvalue_type" | "adwords_sendorder" | "tag_manager_anonymizeip" | "tag_manager_contentexperiments" | "tag_manager_containerid"> | undefined;
}
