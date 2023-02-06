import { GraphQLResolveInfo } from "graphql";
import { UpdateManyQuotesArgs } from "./args/UpdateManyQuotesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyQuotesResolver {
    updateManyQuotes(ctx: any, info: GraphQLResolveInfo, args: UpdateManyQuotesArgs): Promise<AffectedRowsOutput>;
}
