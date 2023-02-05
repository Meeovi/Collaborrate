import { GraphQLResolveInfo } from "graphql";
import { GroupByPaymentsArgs } from "./args/GroupByPaymentsArgs";
import { PaymentsGroupBy } from "../../outputs/PaymentsGroupBy";
export declare class GroupByPaymentsResolver {
    groupByPayments(ctx: any, info: GraphQLResolveInfo, args: GroupByPaymentsArgs): Promise<PaymentsGroupBy[]>;
}
