import { GraphQLResolveInfo } from "graphql";
import { UpdateOneUsersArgs } from "./args/UpdateOneUsersArgs";
import { Users } from "../../../models/Users";
export declare class UpdateOneUsersResolver {
    updateOneUsers(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUsersArgs): Promise<Users | null>;
}
