import { GraphQLResolveInfo } from "graphql";
import { UpdateSales_settingsArgs } from "./args/UpdateSales_settingsArgs";
import { Sales_settings } from "../../../models/Sales_settings";
export declare class UpdateSales_settingsResolver {
    updateSales_settings(ctx: any, info: GraphQLResolveInfo, args: UpdateSales_settingsArgs): Promise<Sales_settings | null>;
}
