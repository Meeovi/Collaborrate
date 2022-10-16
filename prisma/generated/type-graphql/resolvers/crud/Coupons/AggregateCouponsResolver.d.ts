import { GraphQLResolveInfo } from "graphql";
import { AggregateCouponsArgs } from "./args/AggregateCouponsArgs";
import { AggregateCoupons } from "../../outputs/AggregateCoupons";
export declare class AggregateCouponsResolver {
    aggregateCoupons(ctx: any, info: GraphQLResolveInfo, args: AggregateCouponsArgs): Promise<AggregateCoupons>;
}
