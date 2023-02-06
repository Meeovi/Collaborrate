import { GraphQLResolveInfo } from "graphql";
import { FindFirstStatesArgs } from "./args/FindFirstStatesArgs";
import { States } from "../../../models/States";
export declare class FindFirstStatesResolver {
    findFirstStates(ctx: any, info: GraphQLResolveInfo, args: FindFirstStatesArgs): Promise<States | null>;
}
