import { GraphQLResolveInfo } from "graphql";
import { FindManyCollectionsArgs } from "./args/FindManyCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class FindManyCollectionsResolver {
    findManyCollections(ctx: any, info: GraphQLResolveInfo, args: FindManyCollectionsArgs): Promise<Collections[]>;
}
