import { GraphQLResolveInfo } from "graphql";
import { CreateOneUsersArgs } from "./args/CreateOneUsersArgs";
import { Users } from "../../../models/Users";
export declare class CreateOneUsersResolver {
    createOneUsers(ctx: any, info: GraphQLResolveInfo, args: CreateOneUsersArgs): Promise<Users>;
}
