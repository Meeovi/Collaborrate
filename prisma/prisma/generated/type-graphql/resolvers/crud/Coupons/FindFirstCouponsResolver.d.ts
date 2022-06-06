import { GraphQLResolveInfo } from "graphql";
import { FindFirstCouponsArgs } from "./args/FindFirstCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class FindFirstCouponsResolver {
    findFirstCoupons(ctx: any, info: GraphQLResolveInfo, args: FindFirstCouponsArgs): Promise<Coupons | null>;
}
