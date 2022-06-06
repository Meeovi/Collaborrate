import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomer_paymentArgs } from "./args/GroupByCustomer_paymentArgs";
import { Customer_paymentGroupBy } from "../../outputs/Customer_paymentGroupBy";
export declare class GroupByCustomer_paymentResolver {
    groupByCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomer_paymentArgs): Promise<Customer_paymentGroupBy[]>;
}
