import { GraphQLResolveInfo } from "graphql";
import { UpdateOneStatesArgs } from "./args/UpdateOneStatesArgs";
import { States } from "../../../models/States";
export declare class UpdateOneStatesResolver {
    updateOneStates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStatesArgs): Promise<States | null>;
}
