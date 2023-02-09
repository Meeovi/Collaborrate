import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUsersArgs } from "./args/DeleteOneUsersArgs";
import { Users } from "../../../models/Users";
export declare class DeleteOneUsersResolver {
    deleteOneUsers(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUsersArgs): Promise<Users | null>;
}
