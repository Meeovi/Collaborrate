import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePollsArgs } from "./args/UpsertOnePollsArgs";
import { Polls } from "../../../models/Polls";
export declare class UpsertOnePollsResolver {
    upsertOnePolls(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePollsArgs): Promise<Polls>;
}
