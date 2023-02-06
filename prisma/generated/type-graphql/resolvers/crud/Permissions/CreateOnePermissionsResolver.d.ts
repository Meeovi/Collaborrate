import { GraphQLResolveInfo } from "graphql";
import { CreateOnePermissionsArgs } from "./args/CreateOnePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class CreateOnePermissionsResolver {
    createOnePermissions(ctx: any, info: GraphQLResolveInfo, args: CreateOnePermissionsArgs): Promise<Permissions>;
}
