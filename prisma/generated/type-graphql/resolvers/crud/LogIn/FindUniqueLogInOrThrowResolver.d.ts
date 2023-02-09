import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLogInOrThrowArgs } from "./args/FindUniqueLogInOrThrowArgs";
import { LogIn } from "../../../models/LogIn";
export declare class FindUniqueLogInOrThrowResolver {
    getLogIn(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLogInOrThrowArgs): Promise<LogIn | null>;
}
