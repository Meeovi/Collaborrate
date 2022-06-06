import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCommentsArgs } from "./args/FindUniqueCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class FindUniqueCommentsResolver {
    findUniqueComments(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCommentsArgs): Promise<Comments | null>;
}
