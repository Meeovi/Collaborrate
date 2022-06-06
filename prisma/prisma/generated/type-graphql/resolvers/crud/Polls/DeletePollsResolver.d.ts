import { GraphQLResolveInfo } from "graphql";
import { DeletePollsArgs } from "./args/DeletePollsArgs";
import { Polls } from "../../../models/Polls";
export declare class DeletePollsResolver {
    deletePolls(ctx: any, info: GraphQLResolveInfo, args: DeletePollsArgs): Promise<Polls | null>;
}
