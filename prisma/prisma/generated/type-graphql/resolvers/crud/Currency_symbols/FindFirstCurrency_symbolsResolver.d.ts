import { GraphQLResolveInfo } from "graphql";
import { FindFirstCurrency_symbolsArgs } from "./args/FindFirstCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class FindFirstCurrency_symbolsResolver {
    findFirstCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: FindFirstCurrency_symbolsArgs): Promise<Currency_symbols | null>;
}
