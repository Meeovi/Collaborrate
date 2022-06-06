import { GraphQLResolveInfo } from "graphql";
import { DeleteSales_settingsArgs } from "./args/DeleteSales_settingsArgs";
import { Sales_settings } from "../../../models/Sales_settings";
export declare class DeleteSales_settingsResolver {
    deleteSales_settings(ctx: any, info: GraphQLResolveInfo, args: DeleteSales_settingsArgs): Promise<Sales_settings | null>;
}
