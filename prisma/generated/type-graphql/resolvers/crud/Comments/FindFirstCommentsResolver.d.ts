import { GraphQLResolveInfo } from "graphql";
import { FindFirstCommentsArgs } from "./args/FindFirstCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class FindFirstCommentsResolver {
    findFirstComments(ctx: any, info: GraphQLResolveInfo, args: FindFirstCommentsArgs): Promise<Comments | null>;
}
