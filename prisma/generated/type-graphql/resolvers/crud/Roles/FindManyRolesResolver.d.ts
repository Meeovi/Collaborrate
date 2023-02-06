import { GraphQLResolveInfo } from "graphql";
import { FindManyRolesArgs } from "./args/FindManyRolesArgs";
import { Roles } from "../../../models/Roles";
export declare class FindManyRolesResolver {
    findManyRoles(ctx: any, info: GraphQLResolveInfo, args: FindManyRolesArgs): Promise<Roles[]>;
}
