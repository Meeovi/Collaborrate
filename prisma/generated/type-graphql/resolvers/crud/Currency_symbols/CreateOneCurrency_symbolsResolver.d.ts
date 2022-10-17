import { GraphQLResolveInfo } from "graphql";
import { CreateOneCurrency_symbolsArgs } from "./args/CreateOneCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
export declare class CreateOneCurrency_symbolsResolver {
    createOneCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: CreateOneCurrency_symbolsArgs): Promise<Currency_symbols>;
}
