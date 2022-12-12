import { GraphQLResolveInfo } from "graphql";
import { FindFirstSegmentsOrThrowArgs } from "./args/FindFirstSegmentsOrThrowArgs";
import { Segments } from "../../../models/Segments";
export declare class FindFirstSegmentsOrThrowResolver {
    findFirstSegmentsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSegmentsOrThrowArgs): Promise<Segments | null>;
}
