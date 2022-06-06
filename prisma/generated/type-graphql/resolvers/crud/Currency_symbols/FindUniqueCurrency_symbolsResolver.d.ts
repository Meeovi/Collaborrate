import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCurrency_symbolsArgs } from "./args/FindUniqueCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class FindUniqueCurrency_symbolsResolver {
    findUniqueCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCurrency_symbolsArgs): Promise<Currency_symbols | null>;
}
