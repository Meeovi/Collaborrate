import { GraphQLResolveInfo } from "graphql";
import { GroupByCore_storeArgs } from "./args/GroupByCore_storeArgs";
import { Core_storeGroupBy } from "../../outputs/Core_storeGroupBy";
export declare class GroupByCore_storeResolver {
    groupByCore_store(ctx: any, info: GraphQLResolveInfo, args: GroupByCore_storeArgs): Promise<Core_storeGroupBy[]>;
}
