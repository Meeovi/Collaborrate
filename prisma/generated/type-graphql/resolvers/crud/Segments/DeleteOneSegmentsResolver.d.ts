import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSegmentsArgs } from "./args/DeleteOneSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class DeleteOneSegmentsResolver {
    deleteOneSegments(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSegmentsArgs): Promise<Segments | null>;
}
