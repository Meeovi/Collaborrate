import { GraphQLResolveInfo } from "graphql";
import { GroupByTagsArgs } from "./args/GroupByTagsArgs";
import { TagsGroupBy } from "../../outputs/TagsGroupBy";
export declare class GroupByTagsResolver {
    groupByTags(ctx: any, info: GraphQLResolveInfo, args: GroupByTagsArgs): Promise<TagsGroupBy[]>;
}
