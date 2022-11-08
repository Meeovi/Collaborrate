import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEndofshiftArgs } from "./args/FindUniqueEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class FindUniqueEndofshiftResolver {
    endofshift(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEndofshiftArgs): Promise<Endofshift | null>;
}
