import { GraphQLResolveInfo } from "graphql";
import { UpsertPollsArgs } from "./args/UpsertPollsArgs";
import { Polls } from "../../../models/Polls";
export declare class UpsertPollsResolver {
    upsertPolls(ctx: any, info: GraphQLResolveInfo, args: UpsertPollsArgs): Promise<Polls>;
}
