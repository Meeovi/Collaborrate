import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagsOrThrowArgs } from "./args/FindUniqueTagsOrThrowArgs";
import { Tags } from "../../../models/Tags";
export declare class FindUniqueTagsOrThrowResolver {
    findUniqueTagsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagsOrThrowArgs): Promise<Tags | null>;
}
