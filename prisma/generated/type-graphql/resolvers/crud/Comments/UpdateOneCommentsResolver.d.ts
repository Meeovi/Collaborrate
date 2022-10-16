import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCommentsArgs } from "./args/UpdateOneCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class UpdateOneCommentsResolver {
    updateOneComments(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCommentsArgs): Promise<Comments | null>;
}
