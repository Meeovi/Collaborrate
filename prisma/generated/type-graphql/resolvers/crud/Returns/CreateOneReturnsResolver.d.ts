import { GraphQLResolveInfo } from "graphql";
import { CreateOneReturnsArgs } from "./args/CreateOneReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class CreateOneReturnsResolver {
    createOneReturns(ctx: any, info: GraphQLResolveInfo, args: CreateOneReturnsArgs): Promise<Returns>;
}
