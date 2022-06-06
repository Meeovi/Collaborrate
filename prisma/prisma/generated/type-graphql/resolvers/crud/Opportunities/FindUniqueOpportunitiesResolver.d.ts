import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOpportunitiesArgs } from "./args/FindUniqueOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class FindUniqueOpportunitiesResolver {
    findUniqueOpportunities(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOpportunitiesArgs): Promise<Opportunities | null>;
}
