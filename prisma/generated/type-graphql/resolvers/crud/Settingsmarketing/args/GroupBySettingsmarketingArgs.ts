import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingOrderByWithAggregationInput } from "../../../inputs/SettingsmarketingOrderByWithAggregationInput";
import { SettingsmarketingScalarWhereWithAggregatesInput } from "../../../inputs/SettingsmarketingScalarWhereWithAggregatesInput";
import { SettingsmarketingWhereInput } from "../../../inputs/SettingsmarketingWhereInput";
import { SettingsmarketingScalarFieldEnum } from "../../../../enums/SettingsmarketingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySettingsmarketingArgs {
  @TypeGraphQL.Field(_type => SettingsmarketingWhereInput, {
    nullable: true
  })
  where?: SettingsmarketingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingsmarketingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SettingsmarketingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsmarketingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "mail_port" | "recaptcha_api" | "adsense_api" | "sitemap_url" | "customer_data_lifetime" | "mail_server">;

  @TypeGraphQL.Field(_type => SettingsmarketingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SettingsmarketingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
