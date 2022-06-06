import { GraphQLResolveInfo } from "graphql";
import { UpdateCurrency_symbolsArgs } from "./args/UpdateCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class UpdateCurrency_symbolsResolver {
    updateCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: UpdateCurrency_symbolsArgs): Promise<Currency_symbols | null>;
}
