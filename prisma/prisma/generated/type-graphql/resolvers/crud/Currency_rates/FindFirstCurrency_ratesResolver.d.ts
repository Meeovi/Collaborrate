import { GraphQLResolveInfo } from "graphql";
import { FindFirstCurrency_ratesArgs } from "./args/FindFirstCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class FindFirstCurrency_ratesResolver {
    findFirstCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: FindFirstCurrency_ratesArgs): Promise<Currency_rates | null>;
}
