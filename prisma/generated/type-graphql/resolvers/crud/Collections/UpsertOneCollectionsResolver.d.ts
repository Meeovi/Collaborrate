import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCollectionsArgs } from "./args/UpsertOneCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class UpsertOneCollectionsResolver {
    upsertOneCollections(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCollectionsArgs): Promise<Collections>;
}
