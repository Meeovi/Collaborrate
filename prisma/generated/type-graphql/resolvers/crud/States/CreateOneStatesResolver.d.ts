import { GraphQLResolveInfo } from "graphql";
import { CreateOneStatesArgs } from "./args/CreateOneStatesArgs";
import { States } from "../../../models/States";
export declare class CreateOneStatesResolver {
    createOneStates(ctx: any, info: GraphQLResolveInfo, args: CreateOneStatesArgs): Promise<States>;
}
