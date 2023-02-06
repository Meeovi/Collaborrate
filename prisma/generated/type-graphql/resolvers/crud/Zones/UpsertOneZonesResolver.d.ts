import { GraphQLResolveInfo } from "graphql";
import { UpsertOneZonesArgs } from "./args/UpsertOneZonesArgs";
import { Zones } from "../../../models/Zones";
export declare class UpsertOneZonesResolver {
    upsertOneZones(ctx: any, info: GraphQLResolveInfo, args: UpsertOneZonesArgs): Promise<Zones>;
}
