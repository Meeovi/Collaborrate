import { GraphQLResolveInfo } from "graphql";
import { FindFirstStatesOrThrowArgs } from "./args/FindFirstStatesOrThrowArgs";
import { States } from "../../../models/States";
export declare class FindFirstStatesOrThrowResolver {
    findFirstStatesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstStatesOrThrowArgs): Promise<States | null>;
}
