import { GraphQLResolveInfo } from "graphql";
import { FindFirstUsersOrThrowArgs } from "./args/FindFirstUsersOrThrowArgs";
import { Users } from "../../../models/Users";
export declare class FindFirstUsersOrThrowResolver {
    findFirstUsersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstUsersOrThrowArgs): Promise<Users | null>;
}
