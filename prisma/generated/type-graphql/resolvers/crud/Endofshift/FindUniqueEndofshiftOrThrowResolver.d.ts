import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEndofshiftOrThrowArgs } from "./args/FindUniqueEndofshiftOrThrowArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class FindUniqueEndofshiftOrThrowResolver {
    getEndofshift(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEndofshiftOrThrowArgs): Promise<Endofshift | null>;
}
