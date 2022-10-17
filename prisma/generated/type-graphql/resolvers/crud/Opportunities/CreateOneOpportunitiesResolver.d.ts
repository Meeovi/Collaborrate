import { GraphQLResolveInfo } from "graphql";
import { CreateOneOpportunitiesArgs } from "./args/CreateOneOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class CreateOneOpportunitiesResolver {
    createOneOpportunities(ctx: any, info: GraphQLResolveInfo, args: CreateOneOpportunitiesArgs): Promise<Opportunities>;
}
