import { GraphQLResolveInfo } from "graphql";
import { UpsertCouponsArgs } from "./args/UpsertCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class UpsertCouponsResolver {
    upsertCoupons(ctx: any, info: GraphQLResolveInfo, args: UpsertCouponsArgs): Promise<Coupons>;
}
