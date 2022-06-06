import { GraphQLResolveInfo } from "graphql";
import { DeleteCollectionsArgs } from "./args/DeleteCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class DeleteCollectionsResolver {
    deleteCollections(ctx: any, info: GraphQLResolveInfo, args: DeleteCollectionsArgs): Promise<Collections | null>;
}
