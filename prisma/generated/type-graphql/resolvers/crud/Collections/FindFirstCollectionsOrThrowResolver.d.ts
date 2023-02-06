import { GraphQLResolveInfo } from "graphql";
import { FindFirstCollectionsOrThrowArgs } from "./args/FindFirstCollectionsOrThrowArgs";
import { Collections } from "../../../models/Collections";
export declare class FindFirstCollectionsOrThrowResolver {
    findFirstCollectionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCollectionsOrThrowArgs): Promise<Collections | null>;
}
