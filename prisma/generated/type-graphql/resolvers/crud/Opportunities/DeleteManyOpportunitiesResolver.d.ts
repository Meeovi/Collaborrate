import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOpportunitiesArgs } from "./args/DeleteManyOpportunitiesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOpportunitiesResolver {
    deleteManyOpportunities(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOpportunitiesArgs): Promise<AffectedRowsOutput>;
}
