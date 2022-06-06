import { GraphQLResolveInfo } from "graphql";
import { CreatePollsArgs } from "./args/CreatePollsArgs";
import { Polls } from "../../../models/Polls";
export declare class CreatePollsResolver {
    createPolls(ctx: any, info: GraphQLResolveInfo, args: CreatePollsArgs): Promise<Polls>;
}
