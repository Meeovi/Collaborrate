import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStatesOrThrowArgs } from "./args/FindUniqueStatesOrThrowArgs";
import { States } from "../../../models/States";
export declare class FindUniqueStatesOrThrowResolver {
    findUniqueStatesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStatesOrThrowArgs): Promise<States | null>;
}
