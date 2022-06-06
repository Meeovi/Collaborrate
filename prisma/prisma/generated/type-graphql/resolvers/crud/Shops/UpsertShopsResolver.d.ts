import { GraphQLResolveInfo } from "graphql";
import { UpsertShopsArgs } from "./args/UpsertShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class UpsertShopsResolver {
    upsertShops(ctx: any, info: GraphQLResolveInfo, args: UpsertShopsArgs): Promise<Shops>;
}
