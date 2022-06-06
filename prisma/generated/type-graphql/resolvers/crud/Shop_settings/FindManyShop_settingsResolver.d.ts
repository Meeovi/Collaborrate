import { GraphQLResolveInfo } from "graphql";
import { FindManyShop_settingsArgs } from "./args/FindManyShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class FindManyShop_settingsResolver {
    findManyShop_settings(ctx: any, info: GraphQLResolveInfo, args: FindManyShop_settingsArgs): Promise<Shop_settings[]>;
}
