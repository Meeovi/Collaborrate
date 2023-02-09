import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCollectionsOrThrowArgs } from "./args/FindUniqueCollectionsOrThrowArgs";
import { Collections } from "../../../models/Collections";
export declare class FindUniqueCollectionsOrThrowResolver {
    findUniqueCollectionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCollectionsOrThrowArgs): Promise<Collections | null>;
}
