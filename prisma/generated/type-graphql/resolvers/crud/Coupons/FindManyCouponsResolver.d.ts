import { GraphQLResolveInfo } from "graphql";
import { FindManyCouponsArgs } from "./args/FindManyCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class FindManyCouponsResolver {
    findManyCoupons(ctx: any, info: GraphQLResolveInfo, args: FindManyCouponsArgs): Promise<Coupons[]>;
}
