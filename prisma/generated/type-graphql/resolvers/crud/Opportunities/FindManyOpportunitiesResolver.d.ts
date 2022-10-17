import { GraphQLResolveInfo } from "graphql";
import { FindManyOpportunitiesArgs } from "./args/FindManyOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class FindManyOpportunitiesResolver {
    findManyOpportunities(ctx: any, info: GraphQLResolveInfo, args: FindManyOpportunitiesArgs): Promise<Opportunities[]>;
}
