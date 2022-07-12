import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingsmarketingOrderByWithRelationAndSearchRelevanceInput";
import { SettingsmarketingWhereInput } from "../../../inputs/SettingsmarketingWhereInput";
import { SettingsmarketingWhereUniqueInput } from "../../../inputs/SettingsmarketingWhereUniqueInput";
import { SettingsmarketingScalarFieldEnum } from "../../../../enums/SettingsmarketingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSettingsmarketingArgs {
  @TypeGraphQL.Field(_type => SettingsmarketingWhereInput, {
    nullable: true
  })
  where?: SettingsmarketingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingsmarketingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SettingsmarketingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingsmarketingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SettingsmarketingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "mail_port" | "recaptcha_api" | "adsense_api" | "sitemap_url" | "customer_data_lifetime" | "mail_server"> | undefined;
}