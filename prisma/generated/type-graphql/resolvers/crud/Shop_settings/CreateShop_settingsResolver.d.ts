import { GraphQLResolveInfo } from "graphql";
import { CreateShop_settingsArgs } from "./args/CreateShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class CreateShop_settingsResolver {
    createShop_settings(ctx: any, info: GraphQLResolveInfo, args: CreateShop_settingsArgs): Promise<Shop_settings>;
}
