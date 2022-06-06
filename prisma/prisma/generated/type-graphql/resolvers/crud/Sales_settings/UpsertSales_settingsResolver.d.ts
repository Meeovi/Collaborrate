import { GraphQLResolveInfo } from "graphql";
import { UpsertSales_settingsArgs } from "./args/UpsertSales_settingsArgs";
import { Sales_settings } from "../../../models/Sales_settings";
export declare class UpsertSales_settingsResolver {
    upsertSales_settings(ctx: any, info: GraphQLResolveInfo, args: UpsertSales_settingsArgs): Promise<Sales_settings>;
}
