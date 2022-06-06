import { GraphQLResolveInfo } from "graphql";
import { FindUniqueShopsArgs } from "./args/FindUniqueShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class FindUniqueShopsResolver {
    findUniqueShops(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShopsArgs): Promise<Shops | null>;
}
