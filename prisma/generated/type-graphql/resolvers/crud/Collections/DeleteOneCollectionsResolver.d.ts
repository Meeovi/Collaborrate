import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCollectionsArgs } from "./args/DeleteOneCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class DeleteOneCollectionsResolver {
    deleteOneCollections(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCollectionsArgs): Promise<Collections | null>;
}
