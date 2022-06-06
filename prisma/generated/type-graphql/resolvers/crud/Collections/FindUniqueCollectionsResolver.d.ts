import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCollectionsArgs } from "./args/FindUniqueCollectionsArgs";
import { Collections } from "../../../models/Collections";
export declare class FindUniqueCollectionsResolver {
    findUniqueCollections(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCollectionsArgs): Promise<Collections | null>;
}
