import { GraphQLResolveInfo } from "graphql";
import { UpsertOneEndofshiftArgs } from "./args/UpsertOneEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class UpsertOneEndofshiftResolver {
    upsertOneEndofshift(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEndofshiftArgs): Promise<Endofshift>;
}
