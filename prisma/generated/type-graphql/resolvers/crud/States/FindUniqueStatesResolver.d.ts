import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStatesArgs } from "./args/FindUniqueStatesArgs";
import { States } from "../../../models/States";
export declare class FindUniqueStatesResolver {
    findUniqueStates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStatesArgs): Promise<States | null>;
}
