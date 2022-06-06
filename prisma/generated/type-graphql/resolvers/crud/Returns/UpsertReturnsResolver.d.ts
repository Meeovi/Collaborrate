import { GraphQLResolveInfo } from "graphql";
import { UpsertReturnsArgs } from "./args/UpsertReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class UpsertReturnsResolver {
    upsertReturns(ctx: any, info: GraphQLResolveInfo, args: UpsertReturnsArgs): Promise<Returns>;
}
