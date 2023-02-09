import { GraphQLResolveInfo } from "graphql";
import { FindUniqueZonesOrThrowArgs } from "./args/FindUniqueZonesOrThrowArgs";
import { Zones } from "../../../models/Zones";
export declare class FindUniqueZonesOrThrowResolver {
    findUniqueZonesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueZonesOrThrowArgs): Promise<Zones | null>;
}
