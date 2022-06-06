import { GraphQLResolveInfo } from "graphql";
import { CreateCouponsArgs } from "./args/CreateCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class CreateCouponsResolver {
    createCoupons(ctx: any, info: GraphQLResolveInfo, args: CreateCouponsArgs): Promise<Coupons>;
}
