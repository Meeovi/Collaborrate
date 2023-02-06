import { GraphQLResolveInfo } from "graphql";
import { FindManyReturnsArgs } from "./args/FindManyReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class FindManyReturnsResolver {
    findManyReturns(ctx: any, info: GraphQLResolveInfo, args: FindManyReturnsArgs): Promise<Returns[]>;
}
