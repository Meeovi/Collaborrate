import { GraphQLResolveInfo } from "graphql";
import { UpdateSegmentsArgs } from "./args/UpdateSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class UpdateSegmentsResolver {
    updateSegments(ctx: any, info: GraphQLResolveInfo, args: UpdateSegmentsArgs): Promise<Segments | null>;
}
