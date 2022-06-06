import { GraphQLResolveInfo } from "graphql";
import { UpsertCurrency_symbolsArgs } from "./args/UpsertCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class UpsertCurrency_symbolsResolver {
    upsertCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: UpsertCurrency_symbolsArgs): Promise<Currency_symbols>;
}
