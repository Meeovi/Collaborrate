import { SettingsOrderByWithAggregationInput } from "../../../inputs/SettingsOrderByWithAggregationInput";
import { SettingsScalarWhereWithAggregatesInput } from "../../../inputs/SettingsScalarWhereWithAggregatesInput";
import { SettingsWhereInput } from "../../../inputs/SettingsWhereInput";
export declare class GroupBySettingsArgs {
    where?: SettingsWhereInput | undefined;
    orderBy?: SettingsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "store_name" | "store_phone" | "store_hours" | "country" | "region" | "zipcode" | "city" | "address" | "address_two" | "vat_number" | "allow_state" | "state_required_for" | "allow_countries" | "default_country" | "optional_zip" | "european_union_countries" | "top_destinations" | "base_currency" | "default_currency" | "allowed_currency" | "siteName" | "siteWebsite" | "sentryDsn" | "awsS3" | "databaseUrl" | "isPublic" | "type" | "googleAnalytics" | "searchSetting" | "mailServer" | "siteTagline">;
    having?: SettingsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
