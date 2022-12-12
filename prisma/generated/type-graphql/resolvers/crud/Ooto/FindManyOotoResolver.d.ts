import { GraphQLResolveInfo } from "graphql";
import { FindManyOotoArgs } from "./args/FindManyOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class FindManyOotoResolver {
    ootos(ctx: any, info: GraphQLResolveInfo, args: FindManyOotoArgs): Promise<Ooto[]>;
}
