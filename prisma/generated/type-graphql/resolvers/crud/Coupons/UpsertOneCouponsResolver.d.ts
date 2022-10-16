import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCouponsArgs } from "./args/UpsertOneCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class UpsertOneCouponsResolver {
    upsertOneCoupons(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCouponsArgs): Promise<Coupons>;
}
