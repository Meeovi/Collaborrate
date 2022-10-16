import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCurrency_ratesArgs } from "./args/DeleteOneCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class DeleteOneCurrency_ratesResolver {
    deleteOneCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCurrency_ratesArgs): Promise<Currency_rates | null>;
}
