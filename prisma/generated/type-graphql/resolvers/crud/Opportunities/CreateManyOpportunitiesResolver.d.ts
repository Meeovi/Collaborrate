import { GraphQLResolveInfo } from "graphql";
import { CreateManyOpportunitiesArgs } from "./args/CreateManyOpportunitiesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOpportunitiesResolver {
    createManyOpportunities(ctx: any, info: GraphQLResolveInfo, args: CreateManyOpportunitiesArgs): Promise<AffectedRowsOutput>;
}
