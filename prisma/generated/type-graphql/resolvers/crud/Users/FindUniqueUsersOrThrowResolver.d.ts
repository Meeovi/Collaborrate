import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUsersOrThrowArgs } from "./args/FindUniqueUsersOrThrowArgs";
import { Users } from "../../../models/Users";
export declare class FindUniqueUsersOrThrowResolver {
    findUniqueUsersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUsersOrThrowArgs): Promise<Users | null>;
}
