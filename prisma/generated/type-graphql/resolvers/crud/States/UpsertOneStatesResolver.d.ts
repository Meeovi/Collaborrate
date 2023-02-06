import { GraphQLResolveInfo } from "graphql";
import { UpsertOneStatesArgs } from "./args/UpsertOneStatesArgs";
import { States } from "../../../models/States";
export declare class UpsertOneStatesResolver {
    upsertOneStates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStatesArgs): Promise<States>;
}
