import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCasesArgs } from "./args/UpsertOneCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class UpsertOneCasesResolver {
    upsertOneCases(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCasesArgs): Promise<Cases>;
}
