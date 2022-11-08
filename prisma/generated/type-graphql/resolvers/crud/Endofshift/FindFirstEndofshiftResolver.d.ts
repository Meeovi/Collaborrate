import { GraphQLResolveInfo } from "graphql";
import { FindFirstEndofshiftArgs } from "./args/FindFirstEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class FindFirstEndofshiftResolver {
    findFirstEndofshift(ctx: any, info: GraphQLResolveInfo, args: FindFirstEndofshiftArgs): Promise<Endofshift | null>;
}
