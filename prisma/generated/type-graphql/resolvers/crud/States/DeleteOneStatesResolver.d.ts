import { GraphQLResolveInfo } from "graphql";
import { DeleteOneStatesArgs } from "./args/DeleteOneStatesArgs";
import { States } from "../../../models/States";
export declare class DeleteOneStatesResolver {
    deleteOneStates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStatesArgs): Promise<States | null>;
}
