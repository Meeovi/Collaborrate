import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCurrency_symbolsArgs } from "./args/UpdateOneCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class UpdateOneCurrency_symbolsResolver {
    updateOneCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCurrency_symbolsArgs): Promise<Currency_symbols | null>;
}
