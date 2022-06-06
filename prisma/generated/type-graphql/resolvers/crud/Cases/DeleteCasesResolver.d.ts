import { GraphQLResolveInfo } from "graphql";
import { DeleteCasesArgs } from "./args/DeleteCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class DeleteCasesResolver {
    deleteCases(ctx: any, info: GraphQLResolveInfo, args: DeleteCasesArgs): Promise<Cases | null>;
}
