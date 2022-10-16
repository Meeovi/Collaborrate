import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLogInArgs } from "./args/FindUniqueLogInArgs";
import { LogIn } from "../../../models/LogIn";
export declare class FindUniqueLogInResolver {
    logIn(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLogInArgs): Promise<LogIn | null>;
}
