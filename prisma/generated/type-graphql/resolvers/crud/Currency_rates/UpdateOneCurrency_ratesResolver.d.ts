import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCurrency_ratesArgs } from "./args/UpdateOneCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class UpdateOneCurrency_ratesResolver {
    updateOneCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCurrency_ratesArgs): Promise<Currency_rates | null>;
}
