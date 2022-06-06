import { GraphQLResolveInfo } from "graphql";
import { DeleteShop_settingsArgs } from "./args/DeleteShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class DeleteShop_settingsResolver {
    deleteShop_settings(ctx: any, info: GraphQLResolveInfo, args: DeleteShop_settingsArgs): Promise<Shop_settings | null>;
}
