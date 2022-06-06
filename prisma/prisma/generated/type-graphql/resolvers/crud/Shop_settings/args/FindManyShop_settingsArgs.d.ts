import { Shop_settingsOrderByWithRelationInput } from "../../../inputs/Shop_settingsOrderByWithRelationInput";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";
import { Shop_settingsWhereUniqueInput } from "../../../inputs/Shop_settingsWhereUniqueInput";
export declare class FindManyShop_settingsArgs {
    where?: Shop_settingsWhereInput | undefined;
    orderBy?: Shop_settingsOrderByWithRelationInput[] | undefined;
    cursor?: Shop_settingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "store_name" | "store_phone" | "store_hours" | "country" | "region" | "zipcode" | "city" | "address" | "address_two" | "vat_number" | "allow_state" | "state_required_for" | "allow_countries" | "default_country" | "optional_zip" | "european_union_countries" | "top_destinations" | "base_currency" | "default_currency" | "allowed_currency"> | undefined;
}
