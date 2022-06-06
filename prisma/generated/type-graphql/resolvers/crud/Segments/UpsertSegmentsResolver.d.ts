import { GraphQLResolveInfo } from "graphql";
import { UpsertSegmentsArgs } from "./args/UpsertSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class UpsertSegmentsResolver {
    upsertSegments(ctx: any, info: GraphQLResolveInfo, args: UpsertSegmentsArgs): Promise<Segments>;
}
