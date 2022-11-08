import { GraphQLResolveInfo } from "graphql";
import { FindManyUsersArgs } from "./args/FindManyUsersArgs";
import { Users } from "../../../models/Users";
export declare class FindManyUsersResolver {
    findManyUsers(ctx: any, info: GraphQLResolveInfo, args: FindManyUsersArgs): Promise<Users[]>;
}
