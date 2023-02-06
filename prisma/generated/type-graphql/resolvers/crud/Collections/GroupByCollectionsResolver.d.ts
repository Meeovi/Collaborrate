import { GraphQLResolveInfo } from "graphql";
import { GroupByCollectionsArgs } from "./args/GroupByCollectionsArgs";
import { CollectionsGroupBy } from "../../outputs/CollectionsGroupBy";
export declare class GroupByCollectionsResolver {
    groupByCollections(ctx: any, info: GraphQLResolveInfo, args: GroupByCollectionsArgs): Promise<CollectionsGroupBy[]>;
}
