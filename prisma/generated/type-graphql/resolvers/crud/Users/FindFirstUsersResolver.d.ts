import { GraphQLResolveInfo } from "graphql";
import { FindFirstUsersArgs } from "./args/FindFirstUsersArgs";
import { Users } from "../../../models/Users";
export declare class FindFirstUsersResolver {
    findFirstUsers(ctx: any, info: GraphQLResolveInfo, args: FindFirstUsersArgs): Promise<Users | null>;
}
