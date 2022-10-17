import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomersArgs } from "./args/GroupByCustomersArgs";
import { CustomersGroupBy } from "../../outputs/CustomersGroupBy";
export declare class GroupByCustomersResolver {
    groupByCustomers(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomersArgs): Promise<CustomersGroupBy[]>;
}
