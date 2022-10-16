import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCouponsArgs } from "./args/UpdateOneCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class UpdateOneCouponsResolver {
    updateOneCoupons(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCouponsArgs): Promise<Coupons | null>;
}
