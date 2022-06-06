import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagsArgs } from "./args/FindUniqueTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class FindUniqueTagsResolver {
    findUniqueTags(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagsArgs): Promise<Tags | null>;
}
