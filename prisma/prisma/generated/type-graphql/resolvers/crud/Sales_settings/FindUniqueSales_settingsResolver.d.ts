import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSales_settingsArgs } from "./args/FindUniqueSales_settingsArgs";
import { Sales_settings } from "../../../models/Sales_settings";
export declare class FindUniqueSales_settingsResolver {
    findUniqueSales_settings(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSales_settingsArgs): Promise<Sales_settings | null>;
}
