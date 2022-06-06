import { GraphQLResolveInfo } from "graphql";
import { UpdateShop_settingsArgs } from "./args/UpdateShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class UpdateShop_settingsResolver {
    updateShop_settings(ctx: any, info: GraphQLResolveInfo, args: UpdateShop_settingsArgs): Promise<Shop_settings | null>;
}
