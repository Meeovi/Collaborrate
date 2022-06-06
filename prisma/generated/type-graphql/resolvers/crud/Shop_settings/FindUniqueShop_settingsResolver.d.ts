import { GraphQLResolveInfo } from "graphql";
import { FindUniqueShop_settingsArgs } from "./args/FindUniqueShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class FindUniqueShop_settingsResolver {
    findUniqueShop_settings(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShop_settingsArgs): Promise<Shop_settings | null>;
}
