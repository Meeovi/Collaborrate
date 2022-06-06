import { GraphQLResolveInfo } from "graphql";
import { CreateReturnsArgs } from "./args/CreateReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class CreateReturnsResolver {
    createReturns(ctx: any, info: GraphQLResolveInfo, args: CreateReturnsArgs): Promise<Returns>;
}
