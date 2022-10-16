import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOotoArgs } from "./args/FindUniqueOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class FindUniqueOotoResolver {
    ooto(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOotoArgs): Promise<Ooto | null>;
}
