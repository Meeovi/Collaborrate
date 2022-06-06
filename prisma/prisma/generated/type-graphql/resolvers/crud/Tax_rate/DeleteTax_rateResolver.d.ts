import { GraphQLResolveInfo } from "graphql";
import { DeleteTax_rateArgs } from "./args/DeleteTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class DeleteTax_rateResolver {
    deleteTax_rate(ctx: any, info: GraphQLResolveInfo, args: DeleteTax_rateArgs): Promise<Tax_rate | null>;
}
