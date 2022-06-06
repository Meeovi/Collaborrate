import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomerArgs } from "./args/GroupByCustomerArgs";
import { CustomerGroupBy } from "../../outputs/CustomerGroupBy";
export declare class GroupByCustomerResolver {
    groupByCustomer(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomerArgs): Promise<CustomerGroupBy[]>;
}
