import { GraphQLResolveInfo } from "graphql";
import { FindManyLogInArgs } from "./args/FindManyLogInArgs";
import { LogIn } from "../../../models/LogIn";
export declare class FindManyLogInResolver {
    logIns(ctx: any, info: GraphQLResolveInfo, args: FindManyLogInArgs): Promise<LogIn[]>;
}
