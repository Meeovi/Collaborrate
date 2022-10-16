import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCurrency_symbolsArgs } from "./args/DeleteOneCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class DeleteOneCurrency_symbolsResolver {
    deleteOneCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCurrency_symbolsArgs): Promise<Currency_symbols | null>;
}
