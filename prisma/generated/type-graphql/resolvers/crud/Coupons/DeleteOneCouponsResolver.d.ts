import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCouponsArgs } from "./args/DeleteOneCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class DeleteOneCouponsResolver {
    deleteOneCoupons(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCouponsArgs): Promise<Coupons | null>;
}
