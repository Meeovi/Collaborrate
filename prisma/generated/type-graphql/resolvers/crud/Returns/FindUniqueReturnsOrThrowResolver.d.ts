import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReturnsOrThrowArgs } from "./args/FindUniqueReturnsOrThrowArgs";
import { Returns } from "../../../models/Returns";
export declare class FindUniqueReturnsOrThrowResolver {
    findUniqueReturnsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReturnsOrThrowArgs): Promise<Returns | null>;
}
