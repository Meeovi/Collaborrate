import { GraphQLResolveInfo } from "graphql";
import { FindManyCurrency_symbolsArgs } from "./args/FindManyCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class FindManyCurrency_symbolsResolver {
    findManyCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: FindManyCurrency_symbolsArgs): Promise<Currency_symbols[]>;
}
