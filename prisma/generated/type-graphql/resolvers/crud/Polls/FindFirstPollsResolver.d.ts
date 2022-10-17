import { GraphQLResolveInfo } from "graphql";
import { FindFirstPollsArgs } from "./args/FindFirstPollsArgs";
import { Polls } from "../../../models/Polls";
export declare class FindFirstPollsResolver {
    findFirstPolls(ctx: any, info: GraphQLResolveInfo, args: FindFirstPollsArgs): Promise<Polls | null>;
}
