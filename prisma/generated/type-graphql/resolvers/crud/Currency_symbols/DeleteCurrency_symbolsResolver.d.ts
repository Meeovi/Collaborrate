import { GraphQLResolveInfo } from "graphql";
import { DeleteCurrency_symbolsArgs } from "./args/DeleteCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class DeleteCurrency_symbolsResolver {
    deleteCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: DeleteCurrency_symbolsArgs): Promise<Currency_symbols | null>;
}
