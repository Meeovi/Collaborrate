import { GraphQLResolveInfo } from "graphql";
import { UpdateOneOpportunitiesArgs } from "./args/UpdateOneOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class UpdateOneOpportunitiesResolver {
    updateOneOpportunities(ctx: any, info: GraphQLResolveInfo, args: UpdateOneOpportunitiesArgs): Promise<Opportunities | null>;
}
