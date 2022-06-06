import { GraphQLResolveInfo } from "graphql";
import { UpsertCurrency_ratesArgs } from "./args/UpsertCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class UpsertCurrency_ratesResolver {
    upsertCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: UpsertCurrency_ratesArgs): Promise<Currency_rates>;
}
