import { GraphQLResolveInfo } from "graphql";
import { FindFirstReturnsArgs } from "./args/FindFirstReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class FindFirstReturnsResolver {
    findFirstReturns(ctx: any, info: GraphQLResolveInfo, args: FindFirstReturnsArgs): Promise<Returns | null>;
}
