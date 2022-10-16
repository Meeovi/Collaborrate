import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCurrency_ratesArgs } from "./args/UpsertOneCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class UpsertOneCurrency_ratesResolver {
    upsertOneCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCurrency_ratesArgs): Promise<Currency_rates>;
}
