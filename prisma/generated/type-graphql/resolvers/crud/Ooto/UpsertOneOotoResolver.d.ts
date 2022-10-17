import { GraphQLResolveInfo } from "graphql";
import { UpsertOneOotoArgs } from "./args/UpsertOneOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class UpsertOneOotoResolver {
    upsertOneOoto(ctx: any, info: GraphQLResolveInfo, args: UpsertOneOotoArgs): Promise<Ooto>;
}
