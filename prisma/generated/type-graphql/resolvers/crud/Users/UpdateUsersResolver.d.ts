import { GraphQLResolveInfo } from "graphql";
import { UpdateUsersArgs } from "./args/UpdateUsersArgs";
import { Users } from "../../../models/Users";
export declare class UpdateUsersResolver {
    updateUsers(ctx: any, info: GraphQLResolveInfo, args: UpdateUsersArgs): Promise<Users | null>;
}
