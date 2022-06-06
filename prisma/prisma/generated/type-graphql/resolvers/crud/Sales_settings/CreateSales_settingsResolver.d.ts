import { GraphQLResolveInfo } from "graphql";
import { CreateSales_settingsArgs } from "./args/CreateSales_settingsArgs";
import { Sales_settings } from "../../../models/Sales_settings";
export declare class CreateSales_settingsResolver {
    createSales_settings(ctx: any, info: GraphQLResolveInfo, args: CreateSales_settingsArgs): Promise<Sales_settings>;
}
