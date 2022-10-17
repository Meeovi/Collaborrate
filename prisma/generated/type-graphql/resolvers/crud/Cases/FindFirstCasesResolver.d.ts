import { GraphQLResolveInfo } from "graphql";
import { FindFirstCasesArgs } from "./args/FindFirstCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class FindFirstCasesResolver {
    findFirstCases(ctx: any, info: GraphQLResolveInfo, args: FindFirstCasesArgs): Promise<Cases | null>;
}
