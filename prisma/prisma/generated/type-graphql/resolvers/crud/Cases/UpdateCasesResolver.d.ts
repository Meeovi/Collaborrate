import { GraphQLResolveInfo } from "graphql";
import { UpdateCasesArgs } from "./args/UpdateCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class UpdateCasesResolver {
    updateCases(ctx: any, info: GraphQLResolveInfo, args: UpdateCasesArgs): Promise<Cases | null>;
}
