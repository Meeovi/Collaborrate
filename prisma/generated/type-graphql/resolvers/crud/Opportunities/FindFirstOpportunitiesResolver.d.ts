import { GraphQLResolveInfo } from "graphql";
import { FindFirstOpportunitiesArgs } from "./args/FindFirstOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class FindFirstOpportunitiesResolver {
    findFirstOpportunities(ctx: any, info: GraphQLResolveInfo, args: FindFirstOpportunitiesArgs): Promise<Opportunities | null>;
}
