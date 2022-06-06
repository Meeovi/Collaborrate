import { GraphQLResolveInfo } from "graphql";
import { UpdateCouponsArgs } from "./args/UpdateCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class UpdateCouponsResolver {
    updateCoupons(ctx: any, info: GraphQLResolveInfo, args: UpdateCouponsArgs): Promise<Coupons | null>;
}
