import { GraphQLResolveInfo } from "graphql";
import { CreateOneCouponsArgs } from "./args/CreateOneCouponsArgs";
import { Coupons } from "../../../models/Coupons";
export declare class CreateOneCouponsResolver {
    createOneCoupons(ctx: any, info: GraphQLResolveInfo, args: CreateOneCouponsArgs): Promise<Coupons>;
}
