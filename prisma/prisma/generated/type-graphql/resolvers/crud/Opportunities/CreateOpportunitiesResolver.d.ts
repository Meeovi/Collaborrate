import { GraphQLResolveInfo } from "graphql";
import { CreateOpportunitiesArgs } from "./args/CreateOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class CreateOpportunitiesResolver {
    createOpportunities(ctx: any, info: GraphQLResolveInfo, args: CreateOpportunitiesArgs): Promise<Opportunities>;
}
