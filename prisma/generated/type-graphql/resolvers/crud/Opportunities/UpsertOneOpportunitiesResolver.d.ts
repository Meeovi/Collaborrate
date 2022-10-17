import { GraphQLResolveInfo } from "graphql";
import { UpsertOneOpportunitiesArgs } from "./args/UpsertOneOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class UpsertOneOpportunitiesResolver {
    upsertOneOpportunities(ctx: any, info: GraphQLResolveInfo, args: UpsertOneOpportunitiesArgs): Promise<Opportunities>;
}
