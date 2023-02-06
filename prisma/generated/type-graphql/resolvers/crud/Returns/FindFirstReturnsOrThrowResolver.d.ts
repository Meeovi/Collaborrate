import { GraphQLResolveInfo } from "graphql";
import { FindFirstReturnsOrThrowArgs } from "./args/FindFirstReturnsOrThrowArgs";
import { Returns } from "../../../models/Returns";
export declare class FindFirstReturnsOrThrowResolver {
    findFirstReturnsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstReturnsOrThrowArgs): Promise<Returns | null>;
}
