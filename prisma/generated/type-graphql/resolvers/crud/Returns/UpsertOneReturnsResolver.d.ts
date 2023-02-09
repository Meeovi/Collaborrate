import { GraphQLResolveInfo } from "graphql";
import { UpsertOneReturnsArgs } from "./args/UpsertOneReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class UpsertOneReturnsResolver {
    upsertOneReturns(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReturnsArgs): Promise<Returns>;
}
