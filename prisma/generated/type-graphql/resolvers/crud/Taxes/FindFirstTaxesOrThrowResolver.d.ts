import { GraphQLResolveInfo } from "graphql";
import { FindFirstTaxesOrThrowArgs } from "./args/FindFirstTaxesOrThrowArgs";
import { Taxes } from "../../../models/Taxes";
export declare class FindFirstTaxesOrThrowResolver {
    findFirstTaxesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaxesOrThrowArgs): Promise<Taxes | null>;
}
