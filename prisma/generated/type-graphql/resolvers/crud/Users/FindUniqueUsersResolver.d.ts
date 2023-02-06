import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUsersArgs } from "./args/FindUniqueUsersArgs";
import { Users } from "../../../models/Users";
export declare class FindUniqueUsersResolver {
    findUniqueUsers(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUsersArgs): Promise<Users | null>;
}
