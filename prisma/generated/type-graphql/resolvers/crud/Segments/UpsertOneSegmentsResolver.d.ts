import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSegmentsArgs } from "./args/UpsertOneSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class UpsertOneSegmentsResolver {
    upsertOneSegments(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSegmentsArgs): Promise<Segments>;
}
