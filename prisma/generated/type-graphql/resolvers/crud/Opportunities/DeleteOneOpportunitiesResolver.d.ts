import { GraphQLResolveInfo } from "graphql";
import { DeleteOneOpportunitiesArgs } from "./args/DeleteOneOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
export declare class DeleteOneOpportunitiesResolver {
    deleteOneOpportunities(ctx: any, info: GraphQLResolveInfo, args: DeleteOneOpportunitiesArgs): Promise<Opportunities | null>;
}
