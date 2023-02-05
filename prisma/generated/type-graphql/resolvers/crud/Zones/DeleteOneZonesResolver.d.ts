import { GraphQLResolveInfo } from "graphql";
import { DeleteOneZonesArgs } from "./args/DeleteOneZonesArgs";
import { Zones } from "../../../models/Zones";
export declare class DeleteOneZonesResolver {
    deleteOneZones(ctx: any, info: GraphQLResolveInfo, args: DeleteOneZonesArgs): Promise<Zones | null>;
}
