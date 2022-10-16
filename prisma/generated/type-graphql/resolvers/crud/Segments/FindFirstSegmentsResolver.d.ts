import { GraphQLResolveInfo } from "graphql";
import { FindFirstSegmentsArgs } from "./args/FindFirstSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class FindFirstSegmentsResolver {
    findFirstSegments(ctx: any, info: GraphQLResolveInfo, args: FindFirstSegmentsArgs): Promise<Segments | null>;
}
