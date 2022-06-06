import { GraphQLResolveInfo } from "graphql";
import { CreateCurrency_symbolsArgs } from "./args/CreateCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class CreateCurrency_symbolsResolver {
    createCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: CreateCurrency_symbolsArgs): Promise<Currency_symbols>;
}
