import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCommentsArgs } from "./args/DeleteOneCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class DeleteOneCommentsResolver {
    deleteOneComments(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCommentsArgs): Promise<Comments | null>;
}
