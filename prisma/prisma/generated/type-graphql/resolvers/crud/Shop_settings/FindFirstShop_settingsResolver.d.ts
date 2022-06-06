import { GraphQLResolveInfo } from "graphql";
import { FindFirstShop_settingsArgs } from "./args/FindFirstShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class FindFirstShop_settingsResolver {
    findFirstShop_settings(ctx: any, info: GraphQLResolveInfo, args: FindFirstShop_settingsArgs): Promise<Shop_settings | null>;
}
