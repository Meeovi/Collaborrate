import { GraphQLResolveInfo } from "graphql";
import { DeleteOpportunitiesArgs } from "./args/DeleteOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class DeleteOpportunitiesResolver {
    deleteOpportunities(ctx: any, info: GraphQLResolveInfo, args: DeleteOpportunitiesArgs): Promise<Opportunities | null>;
}
