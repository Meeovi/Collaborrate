import { GraphQLResolveInfo } from "graphql";
import { CreateCollectionsArgs } from "./args/CreateCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class CreateCollectionsResolver {
    createCollections(ctx: any, info: GraphQLResolveInfo, args: CreateCollectionsArgs): Promise<Collections>;
}
