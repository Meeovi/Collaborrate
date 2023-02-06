import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReturnsArgs } from "./args/FindUniqueReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class FindUniqueReturnsResolver {
    findUniqueReturns(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReturnsArgs): Promise<Returns | null>;
}
