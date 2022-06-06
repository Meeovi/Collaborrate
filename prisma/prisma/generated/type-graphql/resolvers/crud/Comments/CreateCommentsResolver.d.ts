import { GraphQLResolveInfo } from "graphql";
import { CreateCommentsArgs } from "./args/CreateCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class CreateCommentsResolver {
    createComments(ctx: any, info: GraphQLResolveInfo, args: CreateCommentsArgs): Promise<Comments>;
}
