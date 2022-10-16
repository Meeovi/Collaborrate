import { GraphQLResolveInfo } from "graphql";
import { FindFirstOotoArgs } from "./args/FindFirstOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class FindFirstOotoResolver {
    findFirstOoto(ctx: any, info: GraphQLResolveInfo, args: FindFirstOotoArgs): Promise<Ooto | null>;
}
