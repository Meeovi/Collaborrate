import { GraphQLResolveInfo } from "graphql";
import { CreateStatesArgs } from "./args/CreateStatesArgs";
import { States } from "../../../models/States";
export declare class CreateStatesResolver {
    createStates(ctx: any, info: GraphQLResolveInfo, args: CreateStatesArgs): Promise<States>;
}
