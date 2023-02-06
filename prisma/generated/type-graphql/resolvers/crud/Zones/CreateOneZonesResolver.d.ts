import { GraphQLResolveInfo } from "graphql";
import { CreateOneZonesArgs } from "./args/CreateOneZonesArgs";
import { Zones } from "../../../models/Zones";
export declare class CreateOneZonesResolver {
    createOneZones(ctx: any, info: GraphQLResolveInfo, args: CreateOneZonesArgs): Promise<Zones>;
}
