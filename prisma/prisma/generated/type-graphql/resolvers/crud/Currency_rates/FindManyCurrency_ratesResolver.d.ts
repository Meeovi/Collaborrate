import { GraphQLResolveInfo } from "graphql";
import { FindManyCurrency_ratesArgs } from "./args/FindManyCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
export declare class FindManyCurrency_ratesResolver {
    findManyCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: FindManyCurrency_ratesArgs): Promise<Currency_rates[]>;
}
