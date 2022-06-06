import { GraphQLResolveInfo } from "graphql";
import { UpsertUsersArgs } from "./args/UpsertUsersArgs";
import { Users } from "../../../models/Users";
export declare class UpsertUsersResolver {
    upsertUsers(ctx: any, info: GraphQLResolveInfo, args: UpsertUsersArgs): Promise<Users>;
}
