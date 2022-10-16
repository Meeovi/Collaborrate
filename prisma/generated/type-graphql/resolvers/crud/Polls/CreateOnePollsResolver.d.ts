import { GraphQLResolveInfo } from "graphql";
import { CreateOnePollsArgs } from "./args/CreateOnePollsArgs";
import { Polls } from "../../../models/Polls";
export declare class CreateOnePollsResolver {
    createOnePolls(ctx: any, info: GraphQLResolveInfo, args: CreateOnePollsArgs): Promise<Polls>;
}
