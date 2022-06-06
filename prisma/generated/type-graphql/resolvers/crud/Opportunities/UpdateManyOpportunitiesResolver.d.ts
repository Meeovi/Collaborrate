import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOpportunitiesArgs } from "./args/UpdateManyOpportunitiesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOpportunitiesResolver {
    updateManyOpportunities(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOpportunitiesArgs): Promise<AffectedRowsOutput>;
}
