import { GraphQLResolveInfo } from "graphql";
import { DeleteManyQuotesArgs } from "./args/DeleteManyQuotesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyQuotesResolver {
    deleteManyQuotes(ctx: any, info: GraphQLResolveInfo, args: DeleteManyQuotesArgs): Promise<AffectedRowsOutput>;
}
