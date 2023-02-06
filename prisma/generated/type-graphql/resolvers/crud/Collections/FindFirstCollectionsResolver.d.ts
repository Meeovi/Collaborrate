import { GraphQLResolveInfo } from "graphql";
import { FindFirstCollectionsArgs } from "./args/FindFirstCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class FindFirstCollectionsResolver {
    findFirstCollections(ctx: any, info: GraphQLResolveInfo, args: FindFirstCollectionsArgs): Promise<Collections | null>;
}
