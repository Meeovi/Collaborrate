import { GraphQLResolveInfo } from "graphql";
import { UpsertOotoArgs } from "./args/UpsertOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class UpsertOotoResolver {
    upsertOoto(ctx: any, info: GraphQLResolveInfo, args: UpsertOotoArgs): Promise<Ooto>;
}
