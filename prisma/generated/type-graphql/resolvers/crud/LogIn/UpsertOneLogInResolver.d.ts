import { GraphQLResolveInfo } from "graphql";
import { UpsertOneLogInArgs } from "./args/UpsertOneLogInArgs";
import { LogIn } from "../../../models/LogIn";
export declare class UpsertOneLogInResolver {
    upsertOneLogIn(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLogInArgs): Promise<LogIn>;
}
