import { GraphQLResolveInfo } from "graphql";
import { CreateUsersArgs } from "./args/CreateUsersArgs";
import { Users } from "../../../models/Users";
export declare class CreateUsersResolver {
    createUsers(ctx: any, info: GraphQLResolveInfo, args: CreateUsersArgs): Promise<Users>;
}
