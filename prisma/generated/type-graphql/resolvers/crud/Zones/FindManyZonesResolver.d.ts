import { GraphQLResolveInfo } from "graphql";
import { FindManyZonesArgs } from "./args/FindManyZonesArgs";
import { Zones } from "../../../models/Zones";
export declare class FindManyZonesResolver {
    findManyZones(ctx: any, info: GraphQLResolveInfo, args: FindManyZonesArgs): Promise<Zones[]>;
}
