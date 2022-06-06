import { GraphQLResolveInfo } from "graphql";
import { UpsertStatesArgs } from "./args/UpsertStatesArgs";
import { States } from "../../../models/States";
export declare class UpsertStatesResolver {
    upsertStates(ctx: any, info: GraphQLResolveInfo, args: UpsertStatesArgs): Promise<States>;
}
