import { GraphQLResolveInfo } from "graphql";
import { FindFirstLogInArgs } from "./args/FindFirstLogInArgs";
import { LogIn } from "../../../models/LogIn";
export declare class FindFirstLogInResolver {
    findFirstLogIn(ctx: any, info: GraphQLResolveInfo, args: FindFirstLogInArgs): Promise<LogIn | null>;
}
