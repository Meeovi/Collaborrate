import { GraphQLResolveInfo } from "graphql";
import { FindManyTaxesArgs } from "./args/FindManyTaxesArgs";
import { Taxes } from "../../../models/Taxes";
export declare class FindManyTaxesResolver {
    findManyTaxes(ctx: any, info: GraphQLResolveInfo, args: FindManyTaxesArgs): Promise<Taxes[]>;
}
