import { GraphQLResolveInfo } from "graphql";
import { FindManyTax_rateArgs } from "./args/FindManyTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class FindManyTax_rateResolver {
    tax_rates(ctx: any, info: GraphQLResolveInfo, args: FindManyTax_rateArgs): Promise<Tax_rate[]>;
}
