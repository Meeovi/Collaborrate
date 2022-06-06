import { GraphQLResolveInfo } from "graphql";
import { UpsertCollectionsArgs } from "./args/UpsertCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class UpsertCollectionsResolver {
    upsertCollections(ctx: any, info: GraphQLResolveInfo, args: UpsertCollectionsArgs): Promise<Collections>;
}
