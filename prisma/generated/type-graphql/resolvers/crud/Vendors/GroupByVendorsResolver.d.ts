import { GraphQLResolveInfo } from "graphql";
import { GroupByVendorsArgs } from "./args/GroupByVendorsArgs";
import { VendorsGroupBy } from "../../outputs/VendorsGroupBy";
export declare class GroupByVendorsResolver {
    groupByVendors(ctx: any, info: GraphQLResolveInfo, args: GroupByVendorsArgs): Promise<VendorsGroupBy[]>;
}
