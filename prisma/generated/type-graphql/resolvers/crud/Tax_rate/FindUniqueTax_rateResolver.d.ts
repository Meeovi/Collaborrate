import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTax_rateArgs } from "./args/FindUniqueTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class FindUniqueTax_rateResolver {
    tax_rate(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTax_rateArgs): Promise<Tax_rate | null>;
}
