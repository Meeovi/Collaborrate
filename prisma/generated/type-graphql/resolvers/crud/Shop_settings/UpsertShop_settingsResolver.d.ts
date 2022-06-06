import { GraphQLResolveInfo } from "graphql";
import { UpsertShop_settingsArgs } from "./args/UpsertShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class UpsertShop_settingsResolver {
    upsertShop_settings(ctx: any, info: GraphQLResolveInfo, args: UpsertShop_settingsArgs): Promise<Shop_settings>;
}
