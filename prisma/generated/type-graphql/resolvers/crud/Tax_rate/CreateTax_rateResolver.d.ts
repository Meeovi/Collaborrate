import { GraphQLResolveInfo } from "graphql";
import { CreateTax_rateArgs } from "./args/CreateTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class CreateTax_rateResolver {
    createTax_rate(ctx: any, info: GraphQLResolveInfo, args: CreateTax_rateArgs): Promise<Tax_rate>;
}
