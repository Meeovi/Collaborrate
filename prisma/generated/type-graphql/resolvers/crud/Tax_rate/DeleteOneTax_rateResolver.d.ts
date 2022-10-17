import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTax_rateArgs } from "./args/DeleteOneTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class DeleteOneTax_rateResolver {
    deleteOneTax_rate(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTax_rateArgs): Promise<Tax_rate | null>;
}
