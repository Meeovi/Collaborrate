import { GraphQLResolveInfo } from "graphql";
import { FindManyStatesArgs } from "./args/FindManyStatesArgs";
import { States } from "../../../models/States";
export declare class FindManyStatesResolver {
    findManyStates(ctx: any, info: GraphQLResolveInfo, args: FindManyStatesArgs): Promise<States[]>;
}
