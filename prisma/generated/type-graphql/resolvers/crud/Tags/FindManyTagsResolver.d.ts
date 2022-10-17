import { GraphQLResolveInfo } from "graphql";
import { FindManyTagsArgs } from "./args/FindManyTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class FindManyTagsResolver {
    findManyTags(ctx: any, info: GraphQLResolveInfo, args: FindManyTagsArgs): Promise<Tags[]>;
}
