import { GraphQLResolveInfo } from "graphql";
import { CreateCurrency_ratesArgs } from "./args/CreateCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class CreateCurrency_ratesResolver {
    createCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: CreateCurrency_ratesArgs): Promise<Currency_rates>;
}
