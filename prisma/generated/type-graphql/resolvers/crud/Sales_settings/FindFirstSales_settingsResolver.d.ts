import { GraphQLResolveInfo } from "graphql";
import { FindFirstSales_settingsArgs } from "./args/FindFirstSales_settingsArgs";
import { Sales_settings } from "../../../models/Sales_settings";
export declare class FindFirstSales_settingsResolver {
    findFirstSales_settings(ctx: any, info: GraphQLResolveInfo, args: FindFirstSales_settingsArgs): Promise<Sales_settings | null>;
}
