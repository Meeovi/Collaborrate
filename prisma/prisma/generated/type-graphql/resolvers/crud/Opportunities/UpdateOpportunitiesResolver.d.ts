import { GraphQLResolveInfo } from "graphql";
import { UpdateOpportunitiesArgs } from "./args/UpdateOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class UpdateOpportunitiesResolver {
    updateOpportunities(ctx: any, info: GraphQLResolveInfo, args: UpdateOpportunitiesArgs): Promise<Opportunities | null>;
}
