import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaxesArgs } from "./args/FindUniqueTaxesArgs";
import { Taxes } from "../../../models/Taxes";
export declare class FindUniqueTaxesResolver {
    findUniqueTaxes(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaxesArgs): Promise<Taxes | null>;
}
