import { GraphQLResolveInfo } from "graphql";
import { UpdateCollectionsArgs } from "./args/UpdateCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class UpdateCollectionsResolver {
    updateCollections(ctx: any, info: GraphQLResolveInfo, args: UpdateCollectionsArgs): Promise<Collections | null>;
}
