import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaxesOrThrowArgs } from "./args/FindUniqueTaxesOrThrowArgs";
import { Taxes } from "../../../models/Taxes";
export declare class FindUniqueTaxesOrThrowResolver {
    findUniqueTaxesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaxesOrThrowArgs): Promise<Taxes | null>;
}
