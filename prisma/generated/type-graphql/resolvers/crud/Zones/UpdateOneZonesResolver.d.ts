import { GraphQLResolveInfo } from "graphql";
import { UpdateOneZonesArgs } from "./args/UpdateOneZonesArgs";
import { Zones } from "../../../models/Zones";
export declare class UpdateOneZonesResolver {
    updateOneZones(ctx: any, info: GraphQLResolveInfo, args: UpdateOneZonesArgs): Promise<Zones | null>;
}
