import { GraphQLResolveInfo } from "graphql";
import { UpdateOneLogInArgs } from "./args/UpdateOneLogInArgs";
import { LogIn } from "../../../models/LogIn";
export declare class UpdateOneLogInResolver {
    updateOneLogIn(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLogInArgs): Promise<LogIn | null>;
}
