import { GraphQLResolveInfo } from "graphql";
import { UpdateStatesArgs } from "./args/UpdateStatesArgs";
import { States } from "../../../models/States";
export declare class UpdateStatesResolver {
    updateStates(ctx: any, info: GraphQLResolveInfo, args: UpdateStatesArgs): Promise<States | null>;
}
