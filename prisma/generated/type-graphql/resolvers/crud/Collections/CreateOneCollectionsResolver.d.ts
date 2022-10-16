import { GraphQLResolveInfo } from "graphql";
import { CreateOneCollectionsArgs } from "./args/CreateOneCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class CreateOneCollectionsResolver {
    createOneCollections(ctx: any, info: GraphQLResolveInfo, args: CreateOneCollectionsArgs): Promise<Collections>;
}
