import { GraphQLResolveInfo } from "graphql";
import { FindUniqueZonesArgs } from "./args/FindUniqueZonesArgs";
import { Zones } from "../../../models/Zones";
export declare class FindUniqueZonesResolver {
    findUniqueZones(ctx: any, info: GraphQLResolveInfo, args: FindUniqueZonesArgs): Promise<Zones | null>;
}
