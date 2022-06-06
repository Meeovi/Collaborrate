import { GraphQLResolveInfo } from "graphql";
import { UpdatePollsArgs } from "./args/UpdatePollsArgs";
import { Polls } from "../../../models/Polls";
export declare class UpdatePollsResolver {
    updatePolls(ctx: any, info: GraphQLResolveInfo, args: UpdatePollsArgs): Promise<Polls | null>;
}
