import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCouponsArgs } from "./args/FindUniqueCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class FindUniqueCouponsResolver {
    findUniqueCoupons(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCouponsArgs): Promise<Coupons | null>;
}
