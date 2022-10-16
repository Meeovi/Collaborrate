import { GraphQLResolveInfo } from "graphql";
import { FindManyCommentsArgs } from "./args/FindManyCommentsArgs";
import { Comments } from "../../../models/Comments";
export declare class FindManyCommentsResolver {
    findManyComments(ctx: any, info: GraphQLResolveInfo, args: FindManyCommentsArgs): Promise<Comments[]>;
}
