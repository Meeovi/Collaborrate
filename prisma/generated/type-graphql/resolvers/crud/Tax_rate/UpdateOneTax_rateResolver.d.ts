import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTax_rateArgs } from "./args/UpdateOneTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class UpdateOneTax_rateResolver {
    updateOneTax_rate(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTax_rateArgs): Promise<Tax_rate | null>;
}
