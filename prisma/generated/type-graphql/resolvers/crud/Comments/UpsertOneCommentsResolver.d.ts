import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCommentsArgs } from "./args/UpsertOneCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class UpsertOneCommentsResolver {
    upsertOneComments(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCommentsArgs): Promise<Comments>;
}
