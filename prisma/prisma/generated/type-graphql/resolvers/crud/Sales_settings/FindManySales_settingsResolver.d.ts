import { GraphQLResolveInfo } from "graphql";
import { FindManySales_settingsArgs } from "./args/FindManySales_settingsArgs";
import { Sales_settings } from "../../../models/Sales_settings";
export declare class FindManySales_settingsResolver {
    findManySales_settings(ctx: any, info: GraphQLResolveInfo, args: FindManySales_settingsArgs): Promise<Sales_settings[]>;
}
