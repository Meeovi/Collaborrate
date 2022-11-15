import { GraphQLResolveInfo } from "graphql";
import { FindFirstLogInOrThrowArgs } from "./args/FindFirstLogInOrThrowArgs";
import { LogIn } from "../../../models/LogIn";
export declare class FindFirstLogInOrThrowResolver {
    findFirstLogInOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstLogInOrThrowArgs): Promise<LogIn | null>;
}
