import { GraphQLResolveInfo } from "graphql";
import { FindFirstTagsOrThrowArgs } from "./args/FindFirstTagsOrThrowArgs";
import { Tags } from "../../../models/Tags";
export declare class FindFirstTagsOrThrowResolver {
    findFirstTagsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagsOrThrowArgs): Promise<Tags | null>;
}
