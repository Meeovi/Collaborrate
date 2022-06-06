import { GraphQLResolveInfo } from "graphql";
import { DeleteCouponsArgs } from "./args/DeleteCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class DeleteCouponsResolver {
    deleteCoupons(ctx: any, info: GraphQLResolveInfo, args: DeleteCouponsArgs): Promise<Coupons | null>;
}
