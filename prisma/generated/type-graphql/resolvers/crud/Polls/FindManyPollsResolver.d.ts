import { GraphQLResolveInfo } from "graphql";
import { FindManyPollsArgs } from "./args/FindManyPollsArgs";
import { Polls } from "../../../models/Polls";
export declare class FindManyPollsResolver {
    findManyPolls(ctx: any, info: GraphQLResolveInfo, args: FindManyPollsArgs): Promise<Polls[]>;
}
