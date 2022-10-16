import { GraphQLResolveInfo } from "graphql";
import { GroupByCouponsArgs } from "./args/GroupByCouponsArgs";
import { CouponsGroupBy } from "../../outputs/CouponsGroupBy";
export declare class GroupByCouponsResolver {
    groupByCoupons(ctx: any, info: GraphQLResolveInfo, args: GroupByCouponsArgs): Promise<CouponsGroupBy[]>;
}
