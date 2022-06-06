import { GraphQLResolveInfo } from "graphql";
import { UpsertCasesArgs } from "./args/UpsertCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class UpsertCasesResolver {
    upsertCases(ctx: any, info: GraphQLResolveInfo, args: UpsertCasesArgs): Promise<Cases>;
}
