import { GraphQLResolveInfo } from "graphql";
import { GroupByContent_typeArgs } from "./args/GroupByContent_typeArgs";
import { Content_typeGroupBy } from "../../outputs/Content_typeGroupBy";
export declare class GroupByContent_typeResolver {
    groupByContent_type(ctx: any, info: GraphQLResolveInfo, args: GroupByContent_typeArgs): Promise<Content_typeGroupBy[]>;
}
