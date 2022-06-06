import { GraphQLResolveInfo } from "graphql";
import { FindFirstTagsArgs } from "./args/FindFirstTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class FindFirstTagsResolver {
    findFirstTags(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagsArgs): Promise<Tags | null>;
}
