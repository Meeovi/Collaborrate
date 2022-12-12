import { GraphQLResolveInfo } from "graphql";
import { FindFirstEndofshiftOrThrowArgs } from "./args/FindFirstEndofshiftOrThrowArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class FindFirstEndofshiftOrThrowResolver {
    findFirstEndofshiftOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEndofshiftOrThrowArgs): Promise<Endofshift | null>;
}
