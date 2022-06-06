import { GraphQLResolveInfo } from "graphql";
import { UpdateCurrency_ratesArgs } from "./args/UpdateCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class UpdateCurrency_ratesResolver {
    updateCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: UpdateCurrency_ratesArgs): Promise<Currency_rates | null>;
}
