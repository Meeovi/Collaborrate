import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCasesArgs } from "./args/DeleteOneCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class DeleteOneCasesResolver {
    deleteOneCases(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCasesArgs): Promise<Cases | null>;
}
