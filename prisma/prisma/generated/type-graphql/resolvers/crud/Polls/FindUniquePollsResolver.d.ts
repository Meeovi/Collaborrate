import { GraphQLResolveInfo } from "graphql";
import { FindUniquePollsArgs } from "./args/FindUniquePollsArgs";
import { Polls } from "../../../models/Polls";
export declare class FindUniquePollsResolver {
    findUniquePolls(ctx: any, info: GraphQLResolveInfo, args: FindUniquePollsArgs): Promise<Polls | null>;
}
