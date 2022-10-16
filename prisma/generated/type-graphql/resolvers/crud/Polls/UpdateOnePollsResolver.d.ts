import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePollsArgs } from "./args/UpdateOnePollsArgs";
import { Polls } from "../../../models/Polls";
export declare class UpdateOnePollsResolver {
    updateOnePolls(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePollsArgs): Promise<Polls | null>;
}
