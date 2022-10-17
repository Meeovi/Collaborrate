import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCurrency_ratesArgs } from "./args/FindUniqueCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class FindUniqueCurrency_ratesResolver {
    findUniqueCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCurrency_ratesArgs): Promise<Currency_rates | null>;
}
