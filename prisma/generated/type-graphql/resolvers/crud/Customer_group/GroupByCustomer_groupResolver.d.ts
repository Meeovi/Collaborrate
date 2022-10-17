import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomer_groupArgs } from "./args/GroupByCustomer_groupArgs";
import { Customer_groupGroupBy } from "../../outputs/Customer_groupGroupBy";
export declare class GroupByCustomer_groupResolver {
    groupByCustomer_group(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomer_groupArgs): Promise<Customer_groupGroupBy[]>;
}
