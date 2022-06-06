import { GraphQLResolveInfo } from "graphql";
import { DeleteCurrency_ratesArgs } from "./args/DeleteCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class DeleteCurrency_ratesResolver {
    deleteCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: DeleteCurrency_ratesArgs): Promise<Currency_rates | null>;
}
