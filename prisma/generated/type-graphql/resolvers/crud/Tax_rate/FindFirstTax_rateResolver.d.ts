import { GraphQLResolveInfo } from "graphql";
import { FindFirstTax_rateArgs } from "./args/FindFirstTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class FindFirstTax_rateResolver {
    findFirstTax_rate(ctx: any, info: GraphQLResolveInfo, args: FindFirstTax_rateArgs): Promise<Tax_rate | null>;
}
