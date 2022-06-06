import { GraphQLResolveInfo } from "graphql";
import { FindManyShopsArgs } from "./args/FindManyShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class FindManyShopsResolver {
    findManyShops(ctx: any, info: GraphQLResolveInfo, args: FindManyShopsArgs): Promise<Shops[]>;
}
