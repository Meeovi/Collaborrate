import { GraphQLResolveInfo } from "graphql";
import { UpdateTax_rateArgs } from "./args/UpdateTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class UpdateTax_rateResolver {
    updateTax_rate(ctx: any, info: GraphQLResolveInfo, args: UpdateTax_rateArgs): Promise<Tax_rate | null>;
}
