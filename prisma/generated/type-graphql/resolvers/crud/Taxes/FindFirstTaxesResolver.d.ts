import { GraphQLResolveInfo } from "graphql";
import { FindFirstTaxesArgs } from "./args/FindFirstTaxesArgs";
import { Taxes } from "../../../models/Taxes";
export declare class FindFirstTaxesResolver {
    findFirstTaxes(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaxesArgs): Promise<Taxes | null>;
}
