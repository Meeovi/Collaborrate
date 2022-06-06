import { GraphQLResolveInfo } from "graphql";
import { FindFirstShopsArgs } from "./args/FindFirstShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class FindFirstShopsResolver {
    findFirstShops(ctx: any, info: GraphQLResolveInfo, args: FindFirstShopsArgs): Promise<Shops | null>;
}
