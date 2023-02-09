import { GraphQLResolveInfo } from "graphql";
import { FindFirstZonesOrThrowArgs } from "./args/FindFirstZonesOrThrowArgs";
import { Zones } from "../../../models/Zones";
export declare class FindFirstZonesOrThrowResolver {
    findFirstZonesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstZonesOrThrowArgs): Promise<Zones | null>;
}
