import { GraphQLResolveInfo } from "graphql";
import { DeleteOneLogInArgs } from "./args/DeleteOneLogInArgs";
import { LogIn } from "../../../models/LogIn";
export declare class DeleteOneLogInResolver {
    deleteOneLogIn(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLogInArgs): Promise<LogIn | null>;
}
