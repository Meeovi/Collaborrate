import { GraphQLResolveInfo } from "graphql";
import { UpsertCommentsArgs } from "./args/UpsertCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class UpsertCommentsResolver {
    upsertComments(ctx: any, info: GraphQLResolveInfo, args: UpsertCommentsArgs): Promise<Comments>;
}
