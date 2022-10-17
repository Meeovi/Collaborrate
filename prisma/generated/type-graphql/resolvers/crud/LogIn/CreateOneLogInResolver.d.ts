import { GraphQLResolveInfo } from "graphql";
import { CreateOneLogInArgs } from "./args/CreateOneLogInArgs";
import { LogIn } from "../../../models/LogIn";
export declare class CreateOneLogInResolver {
    createOneLogIn(ctx: any, info: GraphQLResolveInfo, args: CreateOneLogInArgs): Promise<LogIn>;
}
