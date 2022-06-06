import { GraphQLResolveInfo } from "graphql";
import { DeleteUsersArgs } from "./args/DeleteUsersArgs";
import { Users } from "../../../models/Users";
export declare class DeleteUsersResolver {
    deleteUsers(ctx: any, info: GraphQLResolveInfo, args: DeleteUsersArgs): Promise<Users | null>;
}
