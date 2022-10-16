import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCasesArgs } from "./args/FindUniqueCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class FindUniqueCasesResolver {
    findUniqueCases(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCasesArgs): Promise<Cases | null>;
}
