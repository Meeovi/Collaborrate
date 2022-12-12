import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSegmentsArgs } from "./args/UpdateOneSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class UpdateOneSegmentsResolver {
    updateOneSegments(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSegmentsArgs): Promise<Segments | null>;
}
