import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCollectionsArgs } from "./args/UpdateOneCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class UpdateOneCollectionsResolver {
    updateOneCollections(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCollectionsArgs): Promise<Collections | null>;
}
