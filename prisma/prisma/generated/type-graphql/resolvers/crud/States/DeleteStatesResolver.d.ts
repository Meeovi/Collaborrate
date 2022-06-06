import { GraphQLResolveInfo } from "graphql";
import { DeleteStatesArgs } from "./args/DeleteStatesArgs";
import { States } from "../../../models/States";
export declare class DeleteStatesResolver {
    deleteStates(ctx: any, info: GraphQLResolveInfo, args: DeleteStatesArgs): Promise<States | null>;
}
