import { GraphQLResolveInfo } from "graphql";
import { GroupByDiscountsArgs } from "./args/GroupByDiscountsArgs";
import { DiscountsGroupBy } from "../../outputs/DiscountsGroupBy";
export declare class GroupByDiscountsResolver {
    groupByDiscounts(ctx: any, info: GraphQLResolveInfo, args: GroupByDiscountsArgs): Promise<DiscountsGroupBy[]>;
}
