import { GraphQLResolveInfo } from "graphql";
import { FindFirstZonesArgs } from "./args/FindFirstZonesArgs";
import { Zones } from "../../../models/Zones";
export declare class FindFirstZonesResolver {
    findFirstZones(ctx: any, info: GraphQLResolveInfo, args: FindFirstZonesArgs): Promise<Zones | null>;
}
