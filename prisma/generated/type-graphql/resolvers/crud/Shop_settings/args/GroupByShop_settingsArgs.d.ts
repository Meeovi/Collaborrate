import { Shop_settingsOrderByWithAggregationInput } from "../../../inputs/Shop_settingsOrderByWithAggregationInput";
import { Shop_settingsScalarWhereWithAggregatesInput } from "../../../inputs/Shop_settingsScalarWhereWithAggregatesInput";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";
export declare class GroupByShop_settingsArgs {
    where?: Shop_settingsWhereInput | undefined;
    orderBy?: Shop_settingsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "store_name" | "store_phone" | "store_hours" | "country" | "region" | "zipcode" | "city" | "address" | "address_two" | "vat_number" | "allow_state" | "state_required_for" | "allow_countries" | "default_country" | "optional_zip" | "european_union_countries" | "top_destinations" | "base_currency" | "default_currency" | "allowed_currency">;
    having?: Shop_settingsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
