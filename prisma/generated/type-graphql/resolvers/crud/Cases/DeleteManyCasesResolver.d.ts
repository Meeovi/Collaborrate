import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCasesArgs } from "./args/DeleteManyCasesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCasesResolver {
    deleteManyCases(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCasesArgs): Promise<AffectedRowsOutput>;
}
