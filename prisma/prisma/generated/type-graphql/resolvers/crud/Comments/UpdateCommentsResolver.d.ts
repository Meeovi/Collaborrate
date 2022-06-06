import { GraphQLResolveInfo } from "graphql";
import { UpdateCommentsArgs } from "./args/UpdateCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class UpdateCommentsResolver {
    updateComments(ctx: any, info: GraphQLResolveInfo, args: UpdateCommentsArgs): Promise<Comments | null>;
}
