import { GraphQLResolveInfo } from "graphql";
import { DeleteCommentsArgs } from "./args/DeleteCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class DeleteCommentsResolver {
    deleteComments(ctx: any, info: GraphQLResolveInfo, args: DeleteCommentsArgs): Promise<Comments | null>;
}
