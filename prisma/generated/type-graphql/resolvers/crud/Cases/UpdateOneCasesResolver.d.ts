import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCasesArgs } from "./args/UpdateOneCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class UpdateOneCasesResolver {
    updateOneCases(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCasesArgs): Promise<Cases | null>;
}
