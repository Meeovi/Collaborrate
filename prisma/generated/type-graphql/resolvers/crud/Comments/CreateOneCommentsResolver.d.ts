import { GraphQLResolveInfo } from "graphql";
import { CreateOneCommentsArgs } from "./args/CreateOneCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class CreateOneCommentsResolver {
    createOneComments(ctx: any, info: GraphQLResolveInfo, args: CreateOneCommentsArgs): Promise<Comments>;
}
