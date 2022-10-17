import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePollsArgs } from "./args/DeleteOnePollsArgs";
import { Polls } from "../../../models/Polls";
export declare class DeleteOnePollsResolver {
    deleteOnePolls(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePollsArgs): Promise<Polls | null>;
}
