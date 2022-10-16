import { GraphQLResolveInfo } from "graphql";
import { GroupBySpecial_discountsArgs } from "./args/GroupBySpecial_discountsArgs";
import { Special_discountsGroupBy } from "../../outputs/Special_discountsGroupBy";
export declare class GroupBySpecial_discountsResolver {
    groupBySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: GroupBySpecial_discountsArgs): Promise<Special_discountsGroupBy[]>;
}
