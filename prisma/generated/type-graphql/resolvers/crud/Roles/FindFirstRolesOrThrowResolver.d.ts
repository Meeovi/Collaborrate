import { GraphQLResolveInfo } from "graphql";
import { FindFirstRolesOrThrowArgs } from "./args/FindFirstRolesOrThrowArgs";
import { Roles } from "../../../models/Roles";
export declare class FindFirstRolesOrThrowResolver {
    findFirstRolesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRolesOrThrowArgs): Promise<Roles | null>;
}
