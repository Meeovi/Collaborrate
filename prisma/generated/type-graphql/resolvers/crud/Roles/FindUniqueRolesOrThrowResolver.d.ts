import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRolesOrThrowArgs } from "./args/FindUniqueRolesOrThrowArgs";
import { Roles } from "../../../models/Roles";
export declare class FindUniqueRolesOrThrowResolver {
    findUniqueRolesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRolesOrThrowArgs): Promise<Roles | null>;
}
