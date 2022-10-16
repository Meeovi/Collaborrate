import { GraphQLResolveInfo } from "graphql";
import { FindManyEndofshiftArgs } from "./args/FindManyEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class FindManyEndofshiftResolver {
    endofshifts(ctx: any, info: GraphQLResolveInfo, args: FindManyEndofshiftArgs): Promise<Endofshift[]>;
}
