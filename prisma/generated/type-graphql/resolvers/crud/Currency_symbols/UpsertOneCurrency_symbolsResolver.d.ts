import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCurrency_symbolsArgs } from "./args/UpsertOneCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class UpsertOneCurrency_symbolsResolver {
    upsertOneCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCurrency_symbolsArgs): Promise<Currency_symbols>;
}
