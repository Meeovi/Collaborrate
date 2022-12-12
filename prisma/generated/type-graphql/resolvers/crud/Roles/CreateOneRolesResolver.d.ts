import { GraphQLResolveInfo } from "graphql";
import { CreateOneRolesArgs } from "./args/CreateOneRolesArgs";
import { Roles } from "../../../models/Roles";
export declare class CreateOneRolesResolver {
    createOneRoles(ctx: any, info: GraphQLResolveInfo, args: CreateOneRolesArgs): Promise<Roles>;
}
