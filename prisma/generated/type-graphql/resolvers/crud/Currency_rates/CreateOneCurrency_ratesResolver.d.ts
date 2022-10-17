import { GraphQLResolveInfo } from "graphql";
import { CreateOneCurrency_ratesArgs } from "./args/CreateOneCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class CreateOneCurrency_ratesResolver {
    createOneCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: CreateOneCurrency_ratesArgs): Promise<Currency_rates>;
}
