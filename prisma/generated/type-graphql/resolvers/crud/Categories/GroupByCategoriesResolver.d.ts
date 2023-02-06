import { GraphQLResolveInfo } from "graphql";
import { GroupByCategoriesArgs } from "./args/GroupByCategoriesArgs";
import { CategoriesGroupBy } from "../../outputs/CategoriesGroupBy";
export declare class GroupByCategoriesResolver {
    groupByCategories(ctx: any, info: GraphQLResolveInfo, args: GroupByCategoriesArgs): Promise<CategoriesGroupBy[]>;
}
