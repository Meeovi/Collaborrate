import { GraphQLResolveInfo } from "graphql";
import { UpsertOneUsersArgs } from "./args/UpsertOneUsersArgs";
import { Users } from "../../../models/Users";
export declare class UpsertOneUsersResolver {
    upsertOneUsers(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUsersArgs): Promise<Users>;
}
