import { GraphQLResolveInfo } from "graphql";
import { UpsertOpportunitiesArgs } from "./args/UpsertOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class UpsertOpportunitiesResolver {
    upsertOpportunities(ctx: any, info: GraphQLResolveInfo, args: UpsertOpportunitiesArgs): Promise<Opportunities>;
}
