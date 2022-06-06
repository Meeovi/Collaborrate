import { GraphQLResolveInfo } from "graphql";
import { DeleteSegmentsArgs } from "./args/DeleteSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class DeleteSegmentsResolver {
    deleteSegments(ctx: any, info: GraphQLResolveInfo, args: DeleteSegmentsArgs): Promise<Segments | null>;
}
