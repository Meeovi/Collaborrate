import { Coupons } from "../../../models/Coupons";
import { Products } from "../../../models/Products";
export declare class CouponsRelationsResolver {
    products_couponsToproducts(coupons: Coupons, ctx: any): Promise<Products>;
}
